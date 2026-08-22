#!/usr/bin/env bash
# その日の いいねAI の作業を素材として集める。worklog を書くときの入力。
#
#   tools/collect-worklog.sh              # 今日
#   tools/collect-worklog.sh 2026-08-21   # 日付指定
#
# 文章にはしない。コミット・差分・未コミットの変更をそのまま出すだけ。
# 日本語の要約は worklog-YYYY-MM.md 側で人（か自動化エージェント）が書く。
set -euo pipefail

DAY="${1:-$(date +%F)}"
SCOPE="synergy-media/iine-ai"
REPO_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/../../.." && pwd)"

# macOS の date。翌日00:00を上限にしてその日ぶんだけ取る
NEXT="$(date -jf %F -v+1d "$DAY" +%F)"
WD="$(LC_ALL=ja_JP.UTF-8 date -jf %F "$DAY" +%a)"

cd "$REPO_ROOT"

# 変数の直後に全角文字を置くと bash が変数名の一部と読むので必ずブレースで囲む
echo "# ${DAY}（${WD}） いいねAI 作業素材"
echo
echo "リポジトリ: $REPO_ROOT / 対象: $SCOPE"
echo

echo "## コミット"
echo
COMMITS="$(git log --since="$DAY 00:00" --until="$NEXT 00:00" --format="%h" -- "$SCOPE")"
if [ -z "$COMMITS" ]; then
  echo "（この日のコミットなし）"
else
  git log --since="$DAY 00:00" --until="$NEXT 00:00" \
    --format="### %h %ad %s%n%n%b" --date=format:"%H:%M" -- "$SCOPE"
  echo
  echo "## 差分統計"
  echo
  FIRST="$(echo "$COMMITS" | tail -1)"
  LAST="$(echo "$COMMITS" | head -1)"
  git diff --shortstat "$FIRST~1" "$LAST" -- "$SCOPE"
  echo
  echo "### 変更ファイル"
  git diff --name-only "$FIRST~1" "$LAST" -- "$SCOPE" | sed "s|$SCOPE/||"
fi
echo

echo "## 未コミットの変更（この時点）"
echo
# 未コミットは「今の状態」なので、当日を集めるときだけ意味がある。
# 過去日に混ぜると、その日にやっていない作業を書いてしまう。
if [ "$DAY" != "$(date +%F)" ]; then
  echo "（${DAY} は当日ではないので省略。未コミット分は当日の集計にだけ含める）"
  exit 0
fi
DIRTY="$(git status --porcelain -- "$SCOPE")"
if [ -z "$DIRTY" ]; then
  echo "（なし）"
else
  echo "$DIRTY"
  echo
  git diff --shortstat -- "$SCOPE"
  echo
  # コミットしていない作業も作業ログに載せる。diff 全文は長すぎるので頭だけ。
  # ここを読んで「何をしたか」を起こす。切れている場合は切れた旨を書く。
  echo "### 未コミット diff（先頭 ${DIFF_LINES:-400} 行）"
  echo
  TOTAL="$(git diff -- "$SCOPE" | wc -l | tr -d ' ')"
  # head だと git 側が SIGPIPE で死んで pipefail に拾われる。awk なら最後まで読む
  git diff -- "$SCOPE" | awk -v n="${DIFF_LINES:-400}" 'NR<=n'
  if [ "$TOTAL" -gt "${DIFF_LINES:-400}" ]; then
    echo
    echo "（diff は全 ${TOTAL} 行。上は先頭 ${DIFF_LINES:-400} 行だけ）"
  fi
fi
