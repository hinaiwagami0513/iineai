# superseded（失効した旧仕様・矛盾の解決）

> knowledge.md(6/04)とDESIGN.md(alpha・2026/07決定含む)が矛盾する箇所の裁定。**デザインは常にDESIGN.mdが正**。

## デザインシステム（DESIGN.md が勝つ）
- ❌ `React+インラインスタイル/Tailwind禁止/position:fixed禁止` → ✅ shadcn+Tailwind v4+Next（[[design-tokens]]）。
- ❌ `C.pr`等の短縮命名 → ✅ セマンティック名（primary 等）。
- ❌ 絵文字SNSバッジ(📷✕🎵▶) → ✅ Tablerブランドアイコン（[[tabler-icons]] / [[state-color-plus-glyph]]）。
- ❌ 角丸 12/16/20/28 → ✅ 8/12/16/20（[[design-tokens]]）。
- ❌ 見出し weight 800 → ✅ 400/500/700/900 のみ（800は存在しない）。
- ❌ maneku_ds の pink→yellow グラデ → ✅ CTA/Hero の2種のみ。
- ❌ ダークUIに slate(#e2e8f0) → ✅ 暖色オフホワイト（[[editor-dark-theme]]）。

## プロダクト構造（新しい会議が勝つ）
- ❌ ルーム概念・独立ルーム一覧 → ✅ 廃止、投稿作成フロー統合（[[room-concept-abolished]]）。
- ❌ チャット/ハイブリッド3案出し → ✅ フローUI確定（[[flow-ui-decided]]）。
- ❌ 複数案から選ぶAI生成 → ✅ 1案即時反映+チャット修正（[[ai-generation-two-patterns]]）。
- ❌ ダイアログUI → ✅ 専用ページ化(v9)。
- ❌ タスク機能 → ✅ 削除確定（sheet/SP/PostEditPage から撤去）。

## プロダクト方針（6/19会議で転換）
- ❌ AI生成がメイン機能 → ✅ AI生成は**支援程度**、実写撮影が軸（[[raw/mtg-2026-06-19-iwagami]]）。
- ❌ 画像生成が動画編集のメイン機能 → ✅ 画像生成は素材として利用する**補助的な位置**。
- ❌ いいねポイント（消費型） → ✅ **リミット制**に変更。
- ❌ 設問ベースの事前設定フロー → ✅ **設問を一切なくし直感的操作**。複雑な事前設定は廃止。
- ❌ 現行の小さいボタン/文字前提UI → ✅ **ボタン大型化・文字を読まなくても判断できるUI**（40-50代未経験者ターゲット）。

## ルール
判断に迷ったら: デザイン=DESIGN.md、プロダクト仕様=最新の会議([[raw/mtg-2026-05-31-keisuke]]→worklog)。
このページに載っている旧表現をコードやプロンプトに復活させない。
