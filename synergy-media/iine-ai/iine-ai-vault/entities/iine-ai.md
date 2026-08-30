# iine-ai（いいねAI）

> SNS投稿管理 + AI生成 SaaS。親しみやすくポップ、かつ信頼感。オレンジ1色をインタラクションの主役に。

## 基本情報
- 運営会社: CHANGE株式会社（佐藤正太郎が事業主導権、6/19〜）/ 製作・デザイン: ship Inc.（[[hina]]所属）
- デザイン/UX決定権限: 真澤洋利・岩上案理に委譲（6/19確定）
- ドメイン: iine-ai.com / Figma fileKey: `YP9jrVYzJe3kAyR3BtO5FA`（[[raw/figma-screens]]）
- 連携SNS: Instagram / X / TikTok / YouTube の4つ。

## ターゲット（6/19確定）
**40代〜50代の未経験者**。設問なし・直感的操作・ボタン大型化。詳細は [[target-first]]。

## 主要機能
AI投稿作成（企画→台本→投稿文+画像）/ AI動画作成 / 複数企画一括生成 / 分析・カレンダー / **AI読み取り資料**（旧「学習」・8/19改名 [[drive-vs-learning]]）。
※AI生成は**支援程度**。実写撮影が軸、素材がない場合のみAI補完（6/19方針転換 [[raw/mtg-2026-06-19-iwagami]]）。

## 撮影サービスの位置づけ（8/19・検討中）
出張撮影は現在ラクスルに委託。今後は奥澤主導で「**撮り方を教える**」型に切り替える案が出ている。
綺麗に撮るだけではショート動画にならないため。関東圏外の費用対効果が論点で未確定。
出典: [[raw/mtg-2026-08-19-iwagami]]

## ⛔ ブランド未確定（8/28）
**サービス名「いいねAI」とメインカラーが変わる可能性**が佐藤から伝えられた。確定は来週〜9月中旬。
確定までキャラクター・ロゴ・サービスサイトは作り込まない。本体UIの色はトークン差し替えで通るので止めない。
詳細と線引きは [[brand-rename-pending]]。

## キャラ・コピーの声
- 🦊きつねマスコット＝AIアシスタント兼案内役（画像アセット表示、絵文字は廃止）。
  ⚠️ 現行の狐は**仮**（お腹に「いいねAI」の文字入り）。名前変更で作り直しになる（[[brand-rename-pending]]）。
- 機能の主語を「AI」にしない。「AIが企画します」でなく「企画を作る」＝**結果を語る**。
- マスコットのヒントは一度消したら再表示しない。

## 見た目の芯（詳細は concepts）
[[warm-neutral-no-black]] / [[orange-only-interaction]] / [[state-color-plus-glyph]] / [[editor-dark-theme]]

## 実装スタック（★最新）
Next.js / Tailwind CSS v4 / [[shadcn-ui]] / [[tabler-icons]]。トークンは [[design-tokens]]。
※旧「React+インラインスタイル/Tailwind禁止」は失効 → [[superseded]]。

## 主要画面
[[creation-flow]] / [[post-list-page]] / [[video-flow]] / [[script-gen-page]] / [[iine-drive]] / [[template-feature]] / [[editing-surfaces]] / [[settings-page]] / [[onboarding]]

## サービスサイト
[[service-website]]（8/19: LP的な現行構成をやめ、標準的なサービスホームページを作り直す）
