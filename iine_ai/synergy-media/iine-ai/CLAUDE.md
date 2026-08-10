# CLAUDE.md — いいねAI

いいねAI = SNS投稿管理 + AI生成 SaaS（Instagram / X / TikTok / YouTube）。
Stack: Next.js + Tailwind CSS v4 + shadcn/ui + Tabler icons。`DESIGN.md` から globals.css を生成、手で触らない。
ワイヤーHTML群は `iine_board/`（`board.html` がエントリ、`flow_*_wire.html` が各フロー）。

すべて `synergy-media/iine-ai/` 配下で完結する。他グループ（honeytouch / smart-lottery / green-upcycle / ship-inc）のファイルは読まない・流用しない（ルート `CLAUDE.md` の跨ぎ参照禁止）。

## 中身

```
DESIGN.md               デザインの唯一の源泉
iine-ai-vault/          設計・仕様ナレッジ（INDEX.md が入口）
iine_board/             ワイヤーHTML群
iine-ai-knowledge.md    旧ナレッジ（852行・vault化済み / 単体参照しない）
```

## 知識の引き方

- 設計・仕様の詳細は `iine-ai-vault/` にある。まず `iine-ai-vault/INDEX.md` を読み、必要なページだけ開く。全読みしない。
- 画面/機能 → `iine-ai-vault/entities/`、判断/パターン → `iine-ai-vault/concepts/`、一次情報 → `iine-ai-vault/raw/`。
- ※ 旧 `iine-ai-knowledge.md` は vault 化済み。古い値が残っているので単体で参照しない。

## 裁定ルール（矛盾したらこれ）

- デザイン（色・角丸・タイポ・トークン・部品）は `DESIGN.md` が唯一の源泉。
- プロダクト仕様は最新の会議 / worklog が正。
- 迷ったら `iine-ai-vault/concepts/superseded.md`。旧仕様（Tailwind禁止・C.pr短縮名・絵文字SNS・角丸28・weight800 等）を復活させない。

## vault の更新手順（議事録を渡されたとき）

1. 議事録は `iine-ai-vault/raw/mtg-YYYY-MM-DD-〇〇.md` に原文尊重で追加（raw は書き換えない）。
2. そこで刷新・変更・廃止された点を洗い出し、波及する `entities/` `concepts/` を更新。
3. 旧方針をひっくり返した箇所は `concepts/superseded.md` に「旧 → 新」で追記。
4. 新規ページを作ったら `INDEX.md` に1行追加。
5. 最後に「どのファイルをどう変えたか」の差分サマリを出す。

## 書き込みルール

1ファイル1トピック・先頭に1行サマリ / 重複を作らず既存を更新 / 間違いは消すか superseded へ /
`raw/` は書き換えない / compiled ページは必ず raw のソースにリンクで裏取り。
