#!/usr/bin/env bash
# その日の作業ログを md に書いてスプレッドシートに送る。毎日23:00に launchd から呼ばれる。
#
#   tools/daily-worklog.sh              # 今日
#   tools/daily-worklog.sh 2026-08-21   # 日付指定
#   DRY=1 tools/daily-worklog.sh        # 生成だけして書き込まない（標準出力に出す）
#
# 役割分担:
#   collect-worklog.sh … git から素材を集める
#   claude -p          … 素材を読んで md のセクションを書く。ツールは全部止めてあるので
#                        ファイルもネットも触らない（生成だけ）
#   insert-worklog.py  … md に差し込む
#   worklog-to-sheet.py… シートに送る
set -euo pipefail

DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
ROOT="$(cd "$DIR/.." && pwd)"
DAY="${1:-$(date +%F)}"
LOGDIR="$HOME/Library/Logs"
mkdir -p "$LOGDIR"
LOG="$LOGDIR/iineai-worklog.log"

# PATH は launchd から呼ばれると最小限になる。claude(volta) と git を通す
export PATH="$HOME/.volta/bin:/opt/homebrew/bin:/usr/bin:/bin:/usr/sbin:/sbin:$PATH"

log() { printf '%s %s\n' "$(date '+%F %T')" "$*"; }

run() {
  log "start ${DAY}"

  MAT="$(mktemp)"; PROMPT="$(mktemp)"; SECTION="$(mktemp)"
  trap 'rm -f "$MAT" "$PROMPT" "$SECTION"' RETURN

  DIFF_LINES=400 "$DIR/collect-worklog.sh" "$DAY" > "$MAT"

  # コミットも未コミット変更も無い日は書かない。空セクションを積むと読みにくくなる
  if grep -q '（この日のコミットなし）' "$MAT" && grep -qx '（なし）' "$MAT"; then
    log "変更なし。何も書かない"
    return 0
  fi

  # 未コミット diff は「いつやったか」を持たないので、前日ぶんが残っていると
  # 今日の作業として二重に書かれる。既に書いた分を渡して避けさせる。
  ALREADY="$ROOT/iine-ai-vault/raw/worklog-$(echo "$DAY" | cut -c1-7).md"
  {
    cat "$DIR/worklog-prompt.md"
    if [ -f "$ALREADY" ]; then
      printf '\n---- すでに作業ログに書いてある分（重複させない）----\n\n'
      awk 'NR<=200' "$ALREADY"
    fi
    printf '\n---- ここから素材 ----\n\n'
    cat "$MAT"
  } > "$PROMPT"

  # 生成のみ。ツールを止めて「渡した素材だけで書く」状態にする
  if ! claude -p --model opus \
      --disallowedTools "Bash Edit Write Read Glob Grep Task WebFetch WebSearch NotebookEdit TodoWrite" \
      < "$PROMPT" > "$SECTION"; then
    log "ERROR claude の生成に失敗"
    return 1
  fi

  if [ ! -s "$SECTION" ]; then
    log "ERROR 生成結果が空"
    return 1
  fi

  if [ "${DRY:-0}" = "1" ]; then
    log "DRY=1 なので書き込まない。生成結果:"
    cat "$SECTION"
    return 0
  fi

  "$DIR/insert-worklog.py" "$DAY" "$SECTION" || { log "ERROR md への差し込みに失敗"; return 1; }
  "$DIR/worklog-to-sheet.py" "$DAY"          || { log "ERROR シートへの送信に失敗"; return 1; }

  log "done ${DAY}"
}

if [ "${DRY:-0}" = "1" ]; then
  run                       # 手で確かめるときは画面に出す
else
  run >> "$LOG" 2>&1        # 自動実行はログファイルへ
fi
