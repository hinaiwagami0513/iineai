# help-page（ヘルプページ）

> 現行 iine-ai.com/help を freee流IAに作り直した静的プロトタイプが `help_site/` にある（2026-08-16）。文字を読まないユーザー前提の方針は継続。

## 方針（6/19確定・継続）
- テキストより**動画**を優先。図解教材も活用。
- 文字を読まないユーザーが多い現状に対応（40-50代未経験者ターゲット・[[target-first]]）。
- 複雑な機能の使用方法を説明する目的。

## 現行サイト（Next.js / iine-ai.com/help）
- サイドバー + カード羅列。8カテゴリ / 26記事。検索なし・パンくずなし。
- 記事は「STEP 1/2/3」の羅列 + 末尾に目次。
- **内容がワイヤーの現行仕様に追いついていない**（投稿一覧の3タブ・承認フロー・分析3レポート・エディタ・新投稿フローが未記載）。

## 作り直し版（`help_site/` 2026-08-16）
- freee ヘルプセンター流のIA: 検索ファースト → カテゴリ → 記事。10カテゴリ / 51記事。
- 記事の型: 対象プラン・権限・場所 → できること → 手順 → 注意 → FAQ → 役に立ったか → 関連記事。
- **スタックは本番と同じ**: Next.js 15 + Tailwind v4 + [[shadcn-ui]] + [[tabler-icons]]。`output:'export'` で静的書き出し。
- 記事は `content/*.ts` のデータ、描画は `components/article-blocks.tsx`。表示と原稿を分けてある。
- ⌘K の Command パレット検索（かな/カナ・全半角を吸収する自前スコアリング）。
- デザインは [[design-tokens]] 準拠。globals.css で DESIGN.md のトークンを shadcn のトークン名に写している。
- ワイヤー（`iine_board/analysis_*` `image_editor_dark` `video_editor_dark` `flow_*` `post_list` `approval_list`）を出典に新機能ヘルプを新規執筆。

### shadcn に入れた手当て（他プロジェクトでも同じ判断をする）
- shadcn CLI が入れる **lucide を Tabler に置換**する（accordion / sheet / dialog / breadcrumb / command の5ファイル）。`iconLibrary: "tabler"` を components.json に書いても CLI は lucide を吐く。
- `CommandDialog` は cmdk の props を通さないので、`commandProps` を足して `shouldFilter:false` にする。日本語検索は自前スコアのほうが当たる。
- Radix の `ScrollArea` Root は inline style で `position:relative` を当てる。**sticky は外側の div に持たせる**（Root に `sticky` を書いても効かない）。
- shadcn の `TableCell/TableHead` は既定が `whitespace-nowrap`。長文の比較表では `whitespace-normal` に戻さないと横にはみ出す。
- **アイコンを自作しない。**若葉マーク（初心者マーク）を自前SVGで描いたが形が安定せず作り直しになった。
  Tabler に無いモチーフは、**同じ意味を持つ既存アイコンに置き換える**（若葉マーク → `IconSeedlingFilled`）。
  例外として画像アセットを持つのはマスコット（🦊）だけ。

## 用語の注意
投稿一覧の3タブ目は「**予約完了**」（旧「投稿準備完了」から改称）。[[post-list-page]] と表記を揃える。

## 未定・未対応
- スクリーンショット/動画は未挿入（`fig` ブロックの枠だけ用意済み）。ヘルプ動画の制作フローも未定。
- Next.js 実装への移植は未着手。

出典: [[raw/mtg-2026-06-19-iwagami]] / 作り直し版は `help_site/README.md`
