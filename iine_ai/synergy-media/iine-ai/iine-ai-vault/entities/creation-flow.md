# creation-flow（投稿作成フロー）

> 専用ページ /posts/create。順序ある手続き＝左カラム縦ステッパー([[vertical-stepper-standard]])。

## 4つの作成方法（Step1）
✨AIで企画から作る（おすすめ）/ 🖼画像・動画から生成 / 🎬AIで動画を作る / ✏️手動で作る。

## ステップ骨格
1. 何を投稿する？（作成方法4択・SNS・投稿形式・詳細設定・同時オプション）
2. どう作る？（モード別分岐）
3. 仕上げる（確認サマリ+CTA）
4. 生成中（AI企画のみ・normal/bulk/image/both。バックグラウンド可）
5. 完成（単発プレビュー / 複数カード一覧）

## ★分岐ルール（room廃止後）
- AI生成（画像/動画）→ 投稿作成フローから離脱し制作面へ。素材投入はそちら側に一本化。
- 手動 → フロー内で完結（[[editing-surfaces]]のPostEditPage）。
- 詳細な最終フローと台本サブステップは [[script-gen-page]] / [[video-flow]]。

## データ
FormData: creationMode / sns / postFormat / postKind / purpose / imageCount /
sourceType / 同時オプション(bulk/image) / mediaFiles / movieRoomName ほか。

関連: [[ai-generation-two-patterns]] / [[room-concept-abolished]] / 履歴[[raw/version-history]]
