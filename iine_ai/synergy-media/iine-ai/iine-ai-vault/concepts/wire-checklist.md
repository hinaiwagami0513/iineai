# wire-checklist（ワイヤーHTML新規作成時のチェックリスト）

> 新しい画面のワイヤーを作るたびにヘッダーとサイドバーがブレる問題への対策。

## 必ず確認: ヘッダーとサイドバー

新規ワイヤーHTML作成時、**ヘッダーとサイドバーは `shell_header_sidebar_wire.html` から正確にコピーする**。
自前で書き直さない。以下が毎回ズレやすいポイント:

### ヘッダー（DESIGN.md Components > ヘッダー）
- 高さ **56px**（SP 48px）
- 左: ページアイコン（Tabler・**`muted-foreground`** 色・20px）+ ページ名（`h3`・`font-weight-h3`）
- 右: ヘルプ `?`（**32px** 丸・`primary` 1.5px outline）+ サイドバートグル `≡`（**36px** 角丸sm・`border` 1px・`muted-foreground`）
- ロゴはヘッダーに置かない（サイドバー上部）

### サイドバー（DESIGN.md Layout + shell_header_sidebar_wire.html）
- 幅 **250px**、背景 **`surface`**（`card` ではない）
- ロゴ: 高さ24px、`margin-bottom:14px`
- 投稿作成ボタン: `primary` 背景、`radius-md`
- ナビ: `radius-md`、テキスト色 `foreground`、アイコン色 `#6b6864`、アクティブ= `primary-subtle` bg + `primary` 色
- chevron: いいねドライブ・その他・設定に `ti-chevron-down`
- footer: アップグレード（グラデーションボタン）+ スイッチャー（`border-strong` 枠・`radius-md`）

### `.ti` アイコンの `:before` ルール
font-face の woff2 だけでは表示されない。使う全アイコンの `:before{content:"\xxxx"}` ルールを書くこと。
既存ワイヤーからコピーするか、Tabler Icons のコードポイント表を参照。

## コピー元
- CSS + HTML の正規版: **`shell_header_sidebar_wire.html`**（ダッシュボード）
- DESIGN.md の Layout / Components > ヘッダー 節

関連: [[design-tokens]] / DESIGN.md
