---
version: alpha
name: いいねAI
description: >
  SNS投稿管理 + AI生成 SaaS。親しみやすくポップ、かつ信頼感のある UI。
  暖色ニュートラル(warm zinc)を土台に、オレンジ1色だけをインタラクションの主役に据える。
  このファイルが唯一の源泉。globals.css は `export --format css-tailwind` で生成し、手で触らない。
colors:
  # --- Brand（唯一のインタラクション駆動色） ---
  primary: "#ef6108"          # ブランドオレンジ。CTA・アクティブ・リングは全部これ
  primary-hover: "#d9570a"    # ホバー時の一段暗いオレンジ（§3に無かったので導出値）
  primary-light: "#ff971e"    # グラデ相方
  primary-subtle: "#fff2e2"   # 極薄オレンジ（アクティブ背景・選択中背景）
  on-primary: "#ffffff"       # primary上の文字（※大字/太字前提。後述）
  # --- Neutrals（暖色。純黒・寒色グレー禁止） ---
  background: "#f2f1f0"       # ベースキャンバス
  surface: "#fbfaf8"         # 薄い浮き背景（旧 bg2）
  card: "#ffffff"            # カード・入力・ポップオーバーの面
  foreground: "#2a2826"      # メインテキスト（純黒ではなく暖色寄り）
  muted-foreground: "#757575" # サブテキスト
  border: "#e9e8e6"          # 通常ボーダー
  border-strong: "#cfcdc9"   # 強めボーダー（旧 outline）
  input: "#ffffff"           # 入力欄背景
  ring: "#ef6108"            # フォーカスリング
  # --- Semantic states（状態は必ずこの4系統から。新色を作らない） ---
  success: "#12960a"
  success-subtle: "#e7f3e6"
  warning: "#8a6d0f"
  warning-border: "#e8b931"
  warning-subtle: "#fcf4d9"
  info: "#185fa5"            # 情報・作成中ステータス
  info-subtle: "#e6f1fb"
  destructive: "#dc2626"     # 削除・危険（red-600。実装3値の分裂を集約し現場と一致）
  on-destructive: "#ffffff"
  destructive-subtle: "#fee2e2" # エラー背景（棚卸しで判明した欠落を追加）
  like: "#e25563"            # いいね・好調エンゲージメント
  like-subtle: "#fdecee"     # like の薄背景（§3に無かったので導出値）
  # --- IG アクセント紫 ---
  accent-purple: "#9724ba"
  accent-purple-subtle: "#f5e7f8"
  # --- SNS ブランド（バッジ専用。色は必ず Tabler アイコンとセットで使う） ---
  sns-instagram: "#b02a78"
  sns-instagram-subtle: "#fce7f3"
  sns-x: "#2a2826"
  sns-x-subtle: "#f2f1f0"
  sns-tiktok: "#854f0b"
  sns-tiktok-subtle: "#fef3c7"
  sns-youtube: "#c4302b"
  sns-youtube-subtle: "#fcebeb"
  # --- エディタ（ダーク）テーマ：画像/動画エディタ専用。実測から確定 ---
  editor-bg: "#1e1a17"          # 最暗・キャンバス
  editor-surface: "#272320"     # パネル面
  editor-elevated: "#3a3530"    # カード/入力/ホバー（最頻の暖色ダーク）
  editor-stage: "#000000"       # 動画プレビュー背景（純黒）
  editor-foreground: "#f5f3f0"  # 暖色オフホワイト文字（slate #e2e8f0 は使わない）
  editor-muted: "#a8a29e"       # 暖色サブ文字
  editor-border: "#403a34"      # 暗背景の境界
typography:
  # Noto Sans JP の静的ウェイトは 400/500/700/900 のみ（600/800 は存在せず使わない）。
  # サイズは本番実装の実測（10/12/14/16/20/30/36px）を正規化した確定値。8px は廃止（小さすぎ）。
  display:
    fontFamily: "Noto Sans JP"
    fontSize: 2.25rem      # 36px
    fontWeight: 900
    lineHeight: 1.15
  h1:
    fontFamily: "Noto Sans JP"
    fontSize: 1.875rem     # 30px
    fontWeight: 900
    lineHeight: 1.2
  h2:
    fontFamily: "Noto Sans JP"
    fontSize: 1.25rem      # 20px
    fontWeight: 700
    lineHeight: 1.4
  h3:
    fontFamily: "Noto Sans JP"
    fontSize: 1rem         # 16px
    fontWeight: 700
    lineHeight: 1.5
  body-lg:
    fontFamily: "Noto Sans JP"
    fontSize: 1rem         # 16px
    fontWeight: 400
    lineHeight: 1.5
  body:
    fontFamily: "Noto Sans JP"
    fontSize: 0.875rem     # 14px
    fontWeight: 400
    lineHeight: 1.6
  body-strong:
    fontFamily: "Noto Sans JP"
    fontSize: 0.875rem     # 14px
    fontWeight: 700
    lineHeight: 1.6
  label:
    fontFamily: "Noto Sans JP"
    fontSize: 0.75rem      # 12px
    fontWeight: 500
    lineHeight: 1.4
  meta:
    fontFamily: "Noto Sans JP"
    fontSize: 0.625rem     # 10px（実装で最多。密なメタ情報用。可読性要注意）
    fontWeight: 500
    lineHeight: 1.5
rounded:
  # preset の --radius: 1rem(16px) を実測確認済み。これが基準＝lg に一致。
  # §3 の 12/16/20/28 と prose の「ボタン8-10/カード12-14」のブレを正規化した確定スケール。
  # これ以外の任意 radius を手打ちしない。
  sm: 8px
  md: 12px
  lg: 16px
  xl: 20px
  full: 9999px
spacing:
  # 4px グリッド。
  xs: 4px
  sm: 8px
  md: 12px
  lg: 16px
  xl: 24px
  "2xl": 32px
  "3xl": 48px
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.md}"
    padding: 12px
    typography: "{typography.body-strong}"
  button-primary-hover:
    backgroundColor: "{colors.primary-hover}"
  button-secondary:
    backgroundColor: "{colors.card}"
    textColor: "{colors.foreground}"
    rounded: "{rounded.md}"
    padding: 12px
  button-ghost:
    backgroundColor: "{colors.card}"
    textColor: "{colors.foreground}"
    rounded: "{rounded.md}"
  button-destructive:
    backgroundColor: "{colors.destructive}"
    textColor: "{colors.on-destructive}"
    rounded: "{rounded.md}"
  alert-destructive:
    backgroundColor: "{colors.destructive-subtle}"
    textColor: "{colors.destructive}"
    rounded: "{rounded.md}"
    padding: 12px
  input-default:
    backgroundColor: "{colors.input}"
    textColor: "{colors.foreground}"
    rounded: "{rounded.md}"
    padding: 10px
  input-focus:
    backgroundColor: "{colors.primary-subtle}"
  card:
    backgroundColor: "{colors.card}"
    textColor: "{colors.foreground}"
    rounded: "{rounded.lg}"
    padding: 16px
  badge-success:
    backgroundColor: "{colors.success-subtle}"
    textColor: "{colors.success}"
    rounded: "{rounded.full}"
  badge-warning:
    backgroundColor: "{colors.warning-subtle}"
    textColor: "{colors.warning}"
    rounded: "{rounded.full}"
  badge-info:
    backgroundColor: "{colors.info-subtle}"
    textColor: "{colors.info}"
    rounded: "{rounded.full}"
  badge-like:
    backgroundColor: "{colors.like-subtle}"
    textColor: "{colors.like}"
    rounded: "{rounded.full}"
  badge-sns-instagram:
    backgroundColor: "{colors.sns-instagram-subtle}"
    textColor: "{colors.sns-instagram}"
    rounded: "{rounded.full}"
  badge-sns-x:
    backgroundColor: "{colors.sns-x-subtle}"
    textColor: "{colors.sns-x}"
    rounded: "{rounded.full}"
  badge-sns-tiktok:
    backgroundColor: "{colors.sns-tiktok-subtle}"
    textColor: "{colors.sns-tiktok}"
    rounded: "{rounded.full}"
  badge-sns-youtube:
    backgroundColor: "{colors.sns-youtube-subtle}"
    textColor: "{colors.sns-youtube}"
    rounded: "{rounded.full}"
  accent-chip-ig:
    backgroundColor: "{colors.accent-purple-subtle}"
    textColor: "{colors.accent-purple}"
    rounded: "{rounded.full}"
---

## Overview

いいねAI は「SNS運用を誰でも超効率化できる」ことを売りにした投稿管理 + 生成 SaaS。
トーンは**親しみやすい・ポップ・信頼感**。🦊きつねマスコットがアシスタント兼案内役。

見た目の芯は2つだけ覚えればいい:

1. **暖色ニュートラルの上に、オレンジ1色をインタラクションの主役に据える。** 面は白〜暖色グレー、
   押せるもの・選ばれているもの・進む先だけがオレンジ。色をばら撒くと安っぽくなる。
2. **状態は色ではなく「色 + 形/グリフ」のセットで伝える。** アクセシビリティのためでもあり、
   ブランドの一貫性のためでもある。

コピーの声: 機能の主語を「AI」にしない。「AIが企画します」ではなく「企画を作る」のように
**結果を語る**（AI色を前面に出さない、が確定方針）。マスコットのヒントは一度消したら再表示しない。

## Colors

パレットは暖色ニュートラル + オレンジ1アクセント + 状態色 + SNSブランド色で構成する。

- **Primary（#ef6108）**: 唯一のインタラクション駆動色。CTA・アクティブ枠・フォーカスリング・
  選択中マーカーは全部これ。機能ごとに新しいアクセント色を足さない。
- **Primary-subtle（#fff2e2）**: アクティブ/選択中の**背景**。オレンジ枠 + この薄背景がいいねAIの
  「選ばれている」表現の定番。
- **Neutrals**: `background(#f2f1f0)` がベースキャンバス、`card(#ffffff)` が乗せる面。
  テキストは `foreground(#2a2826)`。**純黒 #000 や寒色グレーは使わない**——暖色 zinc を保つ。
- **状態色は success / warning / info / like の4系統に固定**。各々 solid 色 + `-subtle` 背景のペアで、
  「濃い文字 on 薄い背景」のバッジを作る。新しい状態色をその場で発明しない。
- **SNSブランド色**は Instagram/X/TikTok/YouTube のバッジ専用。**色単独で使わず、必ず Tabler アイコン
  （`ti-brand-instagram` / `ti-brand-x` / `ti-brand-tiktok` / `ti-brand-youtube`）とセット**にする。色だけで媒体を区別しない。
  Instagram は**マゼンタ寄り**（`#b02a78`）にして YouTube の赤・primary のオレンジと明確に分離する（赤3兄弟にしない）。
- **紫（#9724ba）**は Instagram 文脈のアクセント限定。汎用アクセントに昇格させない。

コントラスト注意: `on-primary`（白）× `primary`（#ef6108）は約 3.3:1 で、WCAG AA の**大字（太字18.66px以上
相当）は満たすが通常文字サイズは割る**。だから白文字は button-primary 等の**大きめ・太字ラベル限定**。
本文サイズの文字をオレンジ地に白で置かない。lint の contrast-ratio 警告はこの1件を想定内として扱う。

### エディタ（ダーク）テーマ

**画像/動画エディタは通常画面と別世界のダークUI**（制作ツールは映像の色を正しく見るため暗くする）。
通常画面のライトと2枚看板で運用する。ダークの面は暖色3段＋純黒ステージ:

- **キャンバス最暗** `editor-bg (#1e1a17)` → **パネル面** `editor-surface (#272320)` → **カード/入力/ホバー** `editor-elevated (#3a3530)` の3段で階層を作る。
- **動画プレビューのステージだけ `editor-stage (#000000)` の純黒**（映像の見え方を正しくするため。ここは暖色にしない例外）。
- 文字は暖色オフホワイト `editor-foreground (#f5f3f0)`、サブは `editor-muted (#a8a29e)`。**slate系（`#e2e8f0`/`#020817`）は使わない**＝ダークでも暖色を保つ（実測でここに漏れが出ていた＝fix対象）。
- **primary は通常と同じ `#ef6108`**。`#ff5c35` 等のセカンドオレンジは使わない（primary に統一）。
- **タイムラインのトラック色分けは既存の意味色を流用**：テキスト＝マゼンタ系、ナレーション＝`accent-purple`、音楽＝`success`、図形＝`primary`。新色を作らない。
- **タイムラインの構造は必ずこの4点を満たす**（実物準拠）：① 上部に時間ルーラー（0s〜末尾の目盛り）② 現在位置を示す**赤い再生ヘッド**の縦線 ③ 左に固定のトラックアイコン列（動画/画像/テキスト/図形/ナレーション/音楽＋各行に `+`）④ **全トラックが同一時間軸で整列**（クリップは秒数に比例した位置・幅）。色バーを並べただけの表現は不可。
- **ダークの選択/アクティブ状態は「透過 primary（`rgba(239,97,8,.14)`）＋ primary 枠」**を使う。ライトの `primary-subtle (#fff2e2)` はダーク上で浮くため使わない。
- Elevation はダークでは影が効かないので、**面の明度差（3段）＋ `border` で階層を表現**する。

（この節のトークンは実測値。目視で拾わず DevTools 抽出から確定した。）

**エディタ共通レイアウト則（画像/動画で揃える）**：
- **プレビュー/ステージ背景は純黒 `editor-stage (#000000)` で統一**（画像エディタも動画に揃える。素材が主役なので黒で締める）。
- **AIアシスト(🦊)は右ペイン固定**（画像・動画とも。左ツールの下に置かない）。上部に `AIアシスト ● 利用可能`、下に composer。
- **右ペインは `プロパティ` / `AIアシスト` のタブ切替**（画像・動画で共通の確定仕様）。ツール選択時は自動で `プロパティ` を表示。
  これで右ペインが選択ツールのプロパティで埋まっても、AIアシストと衝突しない。
- **画像生成の導線は右上の「AI画像」ボタン**（動画エディタ）＝既存を使う。新規に生成ボタンを増やさない。
- **左＝ツール、中央＝プレビュー、右＝AIアシスト or 選択ツールのプロパティ**、の3ペインを共通の骨格にする。
  動画は下にタイムライン、画像はタイムライン無し（静止画）が唯一の差。
- これで片方の操作を覚えればもう片方も迷わない（学習コストを共有する）。

## Typography

フォントは全面 `Noto Sans JP`（フォールバック: Hiragino Sans, Meiryo, sans-serif）。日本語 SaaS なので
Latin 用フォントを主に据えない。

- **ウェイトは 400 / 500 / 700 / 900 の4段だけ使う。** Noto Sans JP の静的ウェイトがこれしか無いため、
  600・800 を指定しても近い値にスナップして意図通り出ない。見出しは 900、強調・見出し小は 700、
  本文は 400、ラベル/メタは 500。
- **900(Black) は display / h1（30px以上）専用。** 16px以下の小さい文字（ロゴ・ヘッダー・ピル・バッジ等）に
  900 を当てない＝潰れて黒く重くなる。ヘッダー系の太字は 700 までに留める。
- サイズスケールは実測ベースの偶数刻み: display 36 / h1 30 / h2 20 / h3・body-lg 16 / body 14 / label 12 / meta 10。
  中間サイズ（13/15/18/22/28 等）や 8px を手打ちしない。
- 階層は主にウェイトと余白で作る（サイズ段は少なめに保つ）。
- `meta`(10px) は実装で最多使用だが小さい。密なメタ情報以外には使わず、可読性が要る箇所は `label`(12px) 以上に。

## Layout

- 余白は 4px グリッド（spacing トークン）。カード内パディングは `md`〜`lg`、セクション間は `xl`〜`2xl`。
- **トップバー**（全画面共通）: 高さ56px（SP 48px）、`border-bottom` で区切り。
  左に**ページタイトル**（Tabler アイコン + `h3` テキスト）、右に**ヘルプボタン**（32px丸・`primary` 枠・`?`）+
  **一覧ボタン**（36px角丸・`border` 枠・`list-details` アイコン）。
  **ロゴはトップバーに置かない**（サイドバー上部に配置）。**いいねポイント表示は廃止**（リミット制に移行）。
  参考実装: `flow_image_v3_wire.html` のトップバー。
- PC はサイドバー固定（約235px）+ メイン。順序のある手続き（投稿作成・動画フロー）は**左カラム縦ステッパー**が
  いいねAIの標準レイアウト。行き来自由でロックしない。
- 詳細表示は **PC = 右スライドインsheet（約360px）/ SP = 全画面遷移**。
- フィルターUIは **PC = チップ（複数選択・状態常時可視）/ SP = 折りたたみドロップダウン**。並び替えは単一選択
  なので常にドロップダウン。SNSの複数選択をドロップダウンでやらない。

## Elevation & Depth

影は暖色・低コントラスト・控えめ。曖昧語を残さないため具体値を確定する:

- **card**: `0 1px 2px rgb(0 0 0 / 0.06)` — 一覧カード・入力の常時影。
- **raised**: `0 2px 8px rgb(0 0 0 / 0.08)` — ホバー時カード・ドロップダウン。
- **overlay**: `0 8px 24px rgb(0 0 0 / 0.12)` — sheet・モーダル・ポップオーバー。

グラデーションは2つだけ:
- メインCTA/装飾: `linear-gradient(135deg, {colors.primary}, {colors.primary-light})`
- ヒーロー: `linear-gradient(135deg, {colors.primary-subtle} 0%, {colors.card} 100%)`
（旧 maneku_ds のピンク→黄グラデは廃止。使わない。）

**AI生成系ボタンは必ずこのメインCTAグラデを使う**（「AIで画像を生成」「画像台本再生成」「投稿文を再生成」等）。
ベタ塗り primary は通常アクション、グラデは「AIが作る」アクション、と役割で塗り分ける（生成感を出す）。

## Shapes

角丸は `rounded` スケール（sm 8 / md 12 / lg 16 / xl 20 / full）に固定。

- ボタン・入力・小カード = `md`
- 大きめカード・sheet = `lg`
- バッジ・チップ・アバター縁 = `full`
- 任意の中間 radius を手打ちしない（ブレの温床）。

## Components

shadcn/ui のコンポーネントを土台にし、上のトークンでテーマするのが原則。**手でコンポーネントを
再発明しない**（design.md がプロンプトに入ると再実装しがち、が既知の癖。既存の shadcn 部品を使う）。

- **button-primary**: オレンジ地 + 白太字ラベル + `rounded.md`。ホバーで `primary-hover`。
- **button-secondary / ghost**: 白地 + `foreground` 文字。一覧内の破壊操作は常時 ghost の赤字で、
  赤塗り（button-destructive）は確認ダイアログの最終ボタンだけに使う。
- **input**: 白背景固定。フォーカスで**オレンジ枠 + primary-subtle 背景**。
- **セレクト**: ReUI Select 準拠。ネイティブ `<select>` は使わない。
  トリガー = `input` と同じスタイル（`card` 背景 + `border` + `rounded.md`）+ 右に chevron（`ti-chevron-down`）。
  ドロップダウン = `card` 背景 + `border` + `overlay` 影 + `rounded.md`。
  選択肢 = `body` サイズ + ホバーで `surface` 背景 + 選択中はチェックアイコン（`ti-check`）+ `primary` テキスト。
  フォーカスで `primary` 枠 + `primary-subtle` 背景（input-focus と統一）。
- **スライダー**: ReUI Slider 準拠。トラック = `primary` 色の塗りつぶし + `muted` 色の残り。
  サム（つまみ）= 白丸 + `border` + 影。値表示は右端にテキスト（`primary` 色 `body-strong`）。
  ラベル + スライダー + 値を1行に並べる構成が標準。`accent-color` ではなく Radix/ReUI の見た目に揃える。
- **検索バー**: ReUI InputGroup（`@reui/c-input-group-4`）準拠。`InputGroupAddon` に検索アイコン（`ti-mood-search`）+
  `InputGroupInput` の構成。アイコンは `muted-foreground`、入力欄は `input` スタイル準拠。placeholder は日本語（「素材を検索」等）。
- **インライン編集（タイトル等）**: 通常はテキスト表示 + 小さい `ti-edit` アイコン。ホバーで `border` の薄枠を出して
  「編集できる」を示唆。クリックでその場が input に切り替わり、`primary` 枠 + `primary-subtle` 背景（input-focus と同じ）。
  Enter or blur で確定。**モーダルや別画面に飛ばさない**＝ステップ最小のインライン編集が標準。
- **card**: 白面 + `border` + `rounded.lg` + card 影。
- **badge（状態）**: `success/warning/info/like` の subtle 背景 + solid 文字。形は full。
- **badge（SNS）**: 媒体色 subtle 背景 + 媒体色文字 + **Tabler ブランドアイコン必須**（絵文字は使わない）。
- **ローディング画面（全画面ロード）**: キツネマスコットが走るCSSアニメーション + シンプルテキスト構成。
  上段: `.fox-track` 内でキツネが左右に走り（`foxRun` 2.4s alternate）、上下にバウンド（`foxBounce` 0.4s）。
  足元に地面ライン（`.fox-ground`）と影（`.fox-shadow`）。画像は `assets/iine-fox-run.png`（透過PNG）。
  下段: タイトル（`h2` 太字）+ 説明文（`body`/`muted-foreground`、2行程度）+ キャンセルボタン（枠線のみ、塗りなし）。
  **プログレスバー・ドットパルス・残り時間表示は使わない**。参考実装: `flow_video_material_wire.html#sc_generate`。
- **完成画面（投稿の準備ができました！）**: お祝いキツネイラスト（`assets/iine-fox-celebrate.png`）を使用。
  左にイラスト + タイトル + 説明文、右にスマホ風プレビュー（実際のSNS投稿が見えるモックアップ）。
  ボタンは「一覧へ戻る」（ghost）+「投稿を予約する」（primary）。
- **大ステッパー（メインステップ）**: 投稿作成フローの全体工程を示す。縦配置（番号上・ラベル下）。
  数字丸 = 28px / `border:2px solid` / `rounded.full`。done = `success` 塗り + チェック、now = `primary` 塗り、todo = `border` のみ。
  接続線 = `height:2px` / `min-width:40px` / `margin-bottom:20px`（ラベルの上に浮く）。
  `stepbar` は `max-width:600px;margin:0 auto`、`border-bottom` + `card` 背景で区切る。
  参考実装: `flow_image_v3_wire.html`。
- **小ステッパー（サブステップ）**: メインステップ内の細分工程。**大ステッパーと差別化**するため、ドット+テキストの横並び。
  ドット = 8px 無地丸（`rounded.full`）。now = 10px + `primary` 色 + テキスト太字、done = `success` 色、todo = `border` 色。
  テキスト = `label` サイズ。接続線 = `width:20px;height:1px`（細線）。
  `#subnav` は `padding:10px 24px`、`border-bottom` + `card` 背景。数字・チェックアイコンは入れない。
  参考実装: `flow_video_script_wire.html`。
- **AIアシストパネル**: 初期は折りたたみ、ヘッダークリックで展開が標準。
  ヘッダーのマスコットアバターは**丸枠で囲まない**（`border-radius:full` の丸トリミング不要。角丸 `rounded.md` まで）。

リンクは**専用のリンク色を持たない**。既定の `foreground` のまま、ホバーで下線を出すだけ。
**例外: インラインアクションリンク**（ドロップゾーン内の「ファイルを選択」等、文中に埋め込まれた操作トリガー）は
`primary` 色 + 常時下線（`underline-offset:3px`）。ボタンではなくテキストリンクとして表現する。
緑/青/グレーのリンク色分裂を持ち込まない。

### Toast（sonner）の配色

**既定はオレンジ。赤はエラーだけ。**
sonner 既定の rich-colors（緑 / 赤 / 青 / 黄）はいいねAIの配色ではないので使わない。
青い成功トーストが混ざると、そこだけ別プロダクトの顔になる。

| 種類 | 背景 | 枠 | アイコン | 文字 |
|---|---|---|---|---|
| 既定 / `info` / `success` / `warning` | `primary-subtle` | `primary` 30% | ✓ / `primary` | `foreground` |
| `error` | `destructive-subtle` | `destructive` 30% | ✓ / `destructive` | `foreground` |

- **色を持つのは背景・枠・アイコンだけ。本文は `foreground` のまま。**
  オレンジ文字にすると本文が読みにくくなるうえ、[[orange-only-interaction]] の
  「オレンジ = 押せる」と衝突する。トーストは押すものではない。
- **アイコンは種類を問わずチェックマーク1種に統一する**（sonner 既定の i / ⚠ / ✕ は使わない）。
  形を4つに散らすと、右下に一瞬出るだけのトーストで4種の記号を読み分けさせることになる。
  トーストは読み分けるものではなく、本文を読ませるもの。記号は「通知が来た」の目印にとどめる。
  区別が要るのは**エラーだけ**で、それは赤が担う（オレンジ = ふつうの通知 / 赤 = エラー）。
- 種類を付けずに `toast('保存しました')` と呼んでもオレンジ + ✓ になる。既定がオレンジという意味。
- 実装: 実プロダクトは shadcn の sonner に `toastOptions.classNames` でトークンを当てる。
  配布用スタンドアロンHTMLは `iine_board/sonner.js` が同じ配色を持つ。

⚠️ 黄（`warning`）を warning トーストに使わない。オレンジと近すぎて2色に見えず、
かえって「注意」が伝わらない。強く止めたい警告はトーストではなく Dialog / Alert で出す。

> **§ Do's and Don'ts「状態は色だけで表さない」に対する唯一の意図的な例外。**
> トーストは一時表示で操作対象でもないため、形の読み分けより本文の可読性を優先した。
> バッジ・ステータス・SNS媒体表示は従来どおり色 + 形のセットを守る。

### コンポーネント調達方針（DESIGN.md はコンポーネントを再発明しない）

部品は2系統で調達する。DESIGN.md が持つのは B のルールだけで、A は列挙にとどめる。

**A. shadcn/ui からそのまま（トークンで自動テーマ・作り込まない）**
汎用プリミティブは `npx shadcn add <name>` で追加。globals.css(=このファイルの生成物)を読むので
色・角丸・タイポが勝手に揃う。対象:
Accordion / Dialog / Sheet / Tabs / Select / DropdownMenu / Tooltip / Popover / Switch /
Textarea / Progress / Avatar / Toast(sonner) / Alert / Checkbox / Radio / Skeleton /
**MessageScroller / Message / Bubble / Attachment / AttachmentGroup / Marker（チャット一式・2026/06 追加）** /
**Tree（shadcnblocks/tree・2026/07 追加）** /
**InputGroup（ReUI `@reui/c-input-group-4`・2026/07 追加）** /
**Slider（ReUI Slider・2026/07 追加）** /
**Select（ReUI Select・2026/07 追加）**。

**B. いいねAI 固有（shadcn に無い＝ここで「作り方ルール」を規定。フルスペックは書かない）**
- **AIチャット（🦊アシスタント）**: shadcn MessageScroller + Message + Bubble をベースに構成。
  DESIGN.md が持つのは**テーマ規定だけ**:
  ・**コンテナ** = `border` + `rounded.lg`。チャットストリーム背景はベージュ系（`#f0ede9` 等）。
    ヘッダーは `card`（白）背景 + `border-bottom` + **マスコット顔アイコン（`iine-fox-face.png`・`rounded.md`・
    `object-fit:contain`・丸トリミング不可）+ タイトル（`body-strong`）+ サブテキスト（`label`/`muted`）+
    右にリフレッシュアイコン**。**マスコットアイコンはヘッダーに必ず残す**（AIアシストの識別子として）。
  ・**AI発話** = プレーンテキスト（吹き出し無し・アイコン無し）。`body` サイズ + `line-height:1.7`。
    **チャット内にキツネアイコンや吹き出し枠を入れない**（ヘッダーにだけアイコン表示。発話行にアイコンを繰り返すと冗長）。
  ・**ユーザー発話** = 右寄せ + `primary` 背景 + 白文字。`rounded.lg` + `border-top-right-radius: sm`（吹き出し形状）。
    `max-width:88%`。アバターなし。
  ・**コンポーザー**（shadcn AI chat 準拠）= `card`（白）背景 + `border-top` の帯。
    内側に `.chatcomposer-inner`（`muted` 背景 + `border` + `rounded.lg`）のカード型コンテナ。
    上段＝`textarea`（枠なし・背景透過・全幅・`min-height:44px`・`resize:none`）、
    下段＝左に `+` ボタン（32px丸・`background` 色・`muted-foreground`）、
    右に送信ボタン（32px丸・`primary`（オレンジ）塗り + 白の↑矢印SVG）。
    **入力とボタンを同じ高さに横並びにしない**（上下2段構成）。
    `+` クリックでポップオーバーメニュー（上方向・白背景 + `border` + 影）。メニュー外クリックで閉じる。
    メニュー項目は Tabler アイコン + ラベル（例: 写真・ファイルの追加 / いいねドライブから追加）。
  ・**空状態** = 中央にローディングインジケータ + 挨拶テキスト（`h3` + `label`/`muted`）。
  ・**予測変換チップ** = 既存のまま維持（`border` + `rounded.full` + `body` サイズ、ホバーで `primary` 枠）。
  ・生成中/状態通知 = `Marker` に統一（shimmer + `role=status`）。**待ち・進行・完了・システム通知・
    日付区切りは全て Marker で表現する**。待ち系UIを個別に自作しない＝ローディング色の分裂を防ぐ
  ・AI分析 = Bubble 内に `info-subtle` の callout として入れる（Marker ではなく本文内）
  ・案の提示 = Bubble 内に選択カードを composed（選択=`primary` 枠 + `primary-subtle`、画面共通の選択UIと一致）
- **投稿カード（一覧）**: サムネ + SNSバッジ + 更新日時(`meta`) + タイトル(`body-strong`)。Card + Badge の合成。
- **Attachment（写真入りカード・ファイル表示）**: shadcn Attachment 一式（Attachment / AttachmentMedia / AttachmentContent /
  AttachmentTitle / AttachmentDescription / AttachmentActions / AttachmentAction / AttachmentTrigger / AttachmentGroup）をそのまま使う。
  いいねAI 固有のテーマ規定:
  ・**写真入りカード**（投稿サムネ・ドライブ素材等）= `orientation=vertical` + `AttachmentMedia variant=image` で画像を上に配置。
    角丸は `rounded.lg`、面は `card` 背景 + `border`。選択中は `primary` 枠 + `primary-subtle` 背景。
  ・**ファイルカード**（PDF・動画ファイル等）= `orientation=horizontal` + `AttachmentMedia variant=icon`（Tabler アイコン）。
    ファイル種別ごとのアイコン: PDF=`ti-file-type-pdf` / 動画=`ti-video` / 画像=`ti-photo` / その他=`ti-file`。
    **ファイル種別に新色を割り当てない**（アイコン + `muted-foreground` で区別。色は状態だけに使う）。
  ・**アップロード状態**: `state=uploading` のシマーは `primary-subtle` ベース。`state=error` は `destructive-subtle` 背景 + `destructive` 文字。
    `state=done` が既定。進行中の表示は Marker と併用可（チャット内なら Marker、カード単体なら Attachment の state）。
  ・**サイズ使い分け**: `default`=ドライブ・投稿詳細等の標準表示、`sm`=チャット Bubble 内の添付、`xs`=コンポーザー入力欄の添付プレビュー。
  ・**AttachmentGroup**: 複数添付はスクロール可能グループで横並べ。エッジフェード付き。
  ・**AttachmentAction**: 削除=`ti-x`、ダウンロード=`ti-download`、プレビュー=`ti-eye`。必ず `aria-label` を付ける。
- **ファイルアップロード（素材アップ等）**: ReUI file-upload-9（`@reui/c-file-upload-9`）準拠。カード型グリッド方式。
  ・**ドロップゾーン** = 破線枠（`muted-foreground/25` dashed、ドラッグ中は `primary` + `primary/5` 背景）+ `rounded.lg` +
    中央にアップロードアイコン（`muted` 丸背景48px）+ テキスト2行（「ここにドロップまたはファイルを選択」+ ファイル形式・上限）。
  ・**ファイルリストヘッダー** = 「Files(N)」+ 右に「Add files」「Remove all」ボタン（outline/sm）。
  ・**ファイルカード** = カード型グリッド（`grid-cols-3〜6`）。各カード: `card` 背景 + `border` + `rounded.lg`。
    上部 = 正方形エリア（`aspect-square` + `muted` 背景 + 下 `border`）。画像はカバー表示、非画像はアイコン中央表示。
    下部 = `p-3` にファイル名（`body` truncate）+ サイズ（`meta`/`muted`）。
    削除 = ホバーで右上に `×` 丸ボタン（`outline` + `rounded-full` 6px）が出現。
  ・**アップロード中** = サムネ/アイコン上に円形プログレス（SVG ring）をオーバーレイ。画像は半透明黒オーバーレイ付き。
  ・ファイル種別アイコン: 画像=`ti-photo` / 動画=`ti-video` / 音声=`ti-headphones` / PDF=`ti-file-text` / ZIP=`ti-file-text` / その他=`ti-file`。
- **フォルダツリー（いいねドライブ等）**: shadcnblocks/tree をそのまま使う。
  ・Tabler フォルダアイコン（`ti-folder`）+ ノード名。展開/折りたたみは chevron。
  ・選択中ノード = `primary` テキスト + `primary-subtle` 背景 + `rounded.sm`。
  ・コネクタライン（`showLines`）は ON にして階層を明示。インデントは左 padding で段階表現。
  ・新色やカスタムアイコン色を足さない（`muted-foreground` のアイコン + `foreground` のテキストが既定）。
- **画像スロット/カルーセル**: 正方形スロット + 状態ドット + 追加(+)。選択中スロットは `primary` 枠。
- **画像台本アコーディオン**: shadcn Accordion + 各スライドに状態バッジ + コメント数 + ⋯(DropdownMenu)。
- **ポイントピル**: **廃止**（ヘッダーから所持ポイント表示を削除。2026/07 決定）。
- **相談パネル（編集画面の右ペイン）**: `AIアシスト` / `メンバー` の2タブ切替。**横に折りたたみ可能**
  （折ると細い縦バー化、ヘッダー/バークリックで再展開）。デフォルトは折りたたみ。
  ・AIアシスト = 上記チャット規定
  ・メンバー = **投稿単位のチーム相談**（同じ Message/Bubble 構造。相手が人間なのでアバターは各メンバーのイニシャル/画像、
    AI発話でない側は `card` 面）。各スライドの `💬` コメント数と地続き。
- **マスコット**: キャラ表示は画像アセットを使う（絵文字 🦊 は廃止）。**2種を用途で使い分ける**:
  ・顔アイコン `iine-fox-face.png`（正方形・顔が枠いっぱい）= チャットヘッダー・アバター（小）。`rounded.md` + `object-fit:contain`（丸トリミング不可）。
    **チャットバブル横にキツネアイコンは入れない**（ヘッダーにだけ表示。チャット内の発話行にアイコンを繰り返すと冗長）。
  ・全身版 `iine-fox-full.png`（正方形1:1・余白多めの全身）= フキダシ横・空状態・FAB等の大きめ表示。
  ・探偵版 `iine-fox-looking.png`（正方形・虫眼鏡を持つ全身）= **エンプティステート専用**（データ0件・検索無結果など「探してる/まだ無い」文脈）。
  ・お祝い版 `iine-fox-celebrate.png`（正方形1:1・クラッカーと紙吹雪の全身）= **完了/成功の祝い専用**（投稿完成・生成完了・オンボ達成など「やったね」文脈）。`object-fit:contain`。
  **アスペクト比は絶対に変えない（歪ませ厳禁）。全身版は丸く切り取らず `object-fit:contain` で全身を見せる**
  （小さい丸枠に全身版を cover で入れると顔が切れる＝禁止）。背景が要る場合は `primary-subtle`。
  **マスコット画像は必ず `object-fit` を明示する（顔版=cover / 全身版=contain）。素材は非正方形（顔版は約1.18:1）なので、
  未指定だと正方形枠で横に潰れる。** 画像バイナリは repo の `/public` 等に置き、DESIGN.md はパスのみ管理。
- **ロゴ**: サービスロゴは**画像アセット `iine-ai-logo.png`（2階調オレンジのワードマーク）を使う。テキストで組まない**。
  ロゴの2色は `primary`(濃#ef6108) と `primary-light`(明#ff971e) に一致＝ブランドの芯とトークンが揃っている。
  暗背景が必要な箇所用に白抜き版を別途用意してもよいが、原則このカラー版。画像実体は repo に置き DESIGN.md はパスのみ。
- **🦊マスコット FAB**: `primary` 円形、右下固定。中身はマスコット画像。右下コーナーは「バックグラウンド処理の定位置」。

- **ヘッダー（全画面共通）**: 高さ56px、下に `border` の1pxライン。
  ・左＝ページアイコン（Tabler・`muted-foreground`）+ ページ名（`body-strong`〜`h3`）。
  ・右＝**ToDo**（丸ボタン + 未完了数バッジ）+ **チャット**（丸ボタン + 未読数バッジ）+ ヘルプ `?`（`primary` テキスト + `primary` 1.5px outline 丸ボタン・「困ったらここ」）+ サイドバートグル `≡`（`border` 1px 角丸 `sm` 正方形 36px・`muted-foreground`）。
  ・**現在のプラン**は ToDo の左に枠線チップで常時表示（押せないので `border-strong` 1px + `muted-foreground` 文字。オレンジにしない）。
  ・画面固有ボタンがある場合はヘルプの左に追加。
  **所持ポイント表示は置かない（廃止）。アカウントメニューはヘッダーに作らない**（アカウント導線は下部スイッチャーに集約＝重複回避）。
- **ToDo（旧「タスク」は廃止し、この概念に一本化）**: 名前は **ToDo** で統一する（「タスク」表記は使わない）。
  ToDoの**本体はヘッダーのパネル**。どの画面からでも同じ位置で開ける。ホームのカードは抜粋（上位数件）で、
  「すべて見る」で同じパネルを開く。同じリストを2箇所で別々に持たない。
  ・**自動ToDo**＝システムが状態から作る。承認待ち・投稿日時が未定 など。
  **チェックボックスを付けない**（手で消せると未承認のまま消えて実態とずれる）。代わりに「確認する →」のように
  その状態を解消できる画面へ飛ばすボタンだけを置き、元の状態が解けたら自動で消える。
  ・**手動ToDo**＝ユーザーがその場で書くもの。パネル上部の「＋追加」からその場で1行追加でき、チェックで完了、ゴミ箱で削除。
  ・2種類は見出し（`自動で入ったもの` / `自分で追加したもの`）で分ける。チェックの有無が種類の目印になる。
  ・バッジの数＝**自動ToDo + 未完了の手動ToDo**。0件のときバッジは消す。
- **サイドバーのナビ項目（確定・これ以上増やさない）**: 上から `ホーム / 投稿 / カレンダー / 分析 / ドライブ` ―区切り線―
  `設定`（折りたたみ・初期は閉。中身＝運用目的 / SNS設定 / メンバー管理 / AIレビュー）―区切り線― `その他`。
  ・**「ダッシュボード」は名前を廃止し「ホーム」に統一**（40〜50代未経験者にはカタカナ業界語が壁になる。SPの下部タブも同じ並び）。
  ・「NEWS / チャット / ToDo / プラン / 広告作成 / 発注相談 / 出張撮影」は**サイドバーの第一階層に置かない**。行き先は下表のとおり。
  項目が多すぎるサイドバーは「どこを押せばいいか分からない」を生むので、**第一階層は7項目まで**を上限とする。

  | もの | 頭（気づく場所） | 本体（全部ある場所） |
  |---|---|---|
  | NEWS | ホームのカード（最新1件のみ） | `その他 > NEWS` |
  | ToDo | ホームのカード（上位数件） | ヘッダーのToDoパネル |
  | チャット | ヘッダーの未読バッジ + ホームのカード | チャット画面 |
  | プラン | ホームヘッダのチップ | 下部スイッチャー > プラン・支払い |
  | 広告作成 / 発注相談 / 出張撮影 | ホームのフッター3ボタン | 各申し込み画面 |

- **NEWS画面**: 種類は `機能アップデート / お知らせ / メンテナンス / TIPS` の4つ。上にキーワード検索と「すべて既読にする」、
  その下に絞り込みチップ（すべて / 未読 / 各種類）。未読チップには件数バッジを出し、0件で消す。
  ・**未読は点だけで示さない**。行の背景も `primary-subtle`（薄いオレンジ）にする。点は小さく、40〜50代には見落とされるため。
  ・**サムネイルは TIPS（読みもの）にだけ付ける**。お知らせ・メンテナンス・機能アップデートは要件の告知なので、絵は情報を足さずに行を重くするだけ。
  ・**本文はアコーディオンで開かない**。一覧と本文は別ページとして入れ替え、ヘッダーのページ名も記事名に変える。
  長い本文が一覧に割り込むと「どこまでが1件か」が分からなくなるため。行を開いた時点で既読にする。
  ・「投稿タイプ一覧（台本テンプレート）」は廃止。過去投稿の参照は**投稿生成時のAIとのチャット**から行う。
  ・旧「学習」は**ドライブに統合**（PDF / 画像(JPEG,PNG) / 動画(MP4,MOV) / Office(PPTX,DOCX,XLSX) / お気に入り画像を1箇所で扱う）。
- **設定（確定・これ以上増やさない）**: `プロジェクト管理` / `プラン一覧` / `SNSアカウント` / `AIレビュー` / `メンバー管理` の5つ。
  **サイドバーのサブ項目がそのまま画面の切替になる**（画面の中にもう一段ナビを置かない。同じ並びが2つあると迷う）。
  ヘッダーのページ名は `設定 / ◯◯` にして、いまどこにいるかを出す。
  ・**外した項目**：`学習`（→[[いいねドライブ]]の学習タブに統合）、`お気に入り画像`（不要）、`台本テンプレート`（廃止済み）。
  ・**プロジェクト管理**＝`もとになる資料` → `AIが作った内容（5項目）` → `書きぶりのプレビュー` の3段。
  **URLとPDFを入れて「読み込んで作る」を押すと、AIがそれを読んで5項目を作る**（現行の挙動を踏襲）。
  資料は[[いいねドライブ]]の学習タブと同じものを指す（置き場は1つ、入口は2つ）。
  ・5項目は `概要 / 主な特徴 / 料金 / お客様 / 言葉づかい`。**全体を1つの編集モードにせず、項目ごとに読み書きする**
  （全体編集だと「どこを直したか分からない」「保存が怖い」が起きる）。
  ・各項目に**AIがそれをどう使うか**を1行で添える（例：料金→「値段を書くとき、この数字をそのまま使います」）。
  設定の意味が分からないまま埋めさせない。
  ・AIが作った項目には**「AIが資料から作りました」の印**を出す。直してよいものだと分かるようにするため。
  ・進み具合は**「4/5」の数字だけにしない**。5項目を全部ならべ、埋まっているものに `check`、
  まだのものは**破線の枠 + warning色 +「（まだ）」**で出す（数字だけでは、何が何で、どれが空なのか分からない）。
  押すとその項目へ飛び、飛んだ先を一瞬光らせる。
  ・空の項目は**書き方の例**と、空のままだとどうなるか（「みんな向けの当たりさわりのない文章になります」）を出す。
  ・画面の先頭で「ここに書いた内容はAIが毎回かならず読む。**いつ見ても変わらないことだけ**書く」と言い切る
  （セール期間のような変わることを書くと、古い情報のまま投稿される）。
  ・**設定に保存バーは置かない**。プロジェクト管理は項目ごとの保存、それ以外は押した時点で反映（その旨を画面の先頭に書く）。
  画面の下に浮く保存バーは、どのカードに効くのか分からない。
  ・**プラン一覧**＝いまのプラン + 使用量（SNS数 / 今月の投稿数 / ドライブ容量）+ プラン比較。
  上限に達している項目があれば、その場で理由を出す（「SNSが上限3つ。YouTubeを足すにはプラン変更が必要」）。
  下部スイッチャーの「プラン・支払い」もこの画面に入る（同じものを2つ作らない）。
  ・**メンバー管理**は「投稿を出す前に、承認をもらう」のオン/オフが先頭。オフ＝一人運用で、承認者ゼロの運用を正式に許す。
  役割は `オーナー / 承認者 / 作成者` の3つで、それぞれ何ができるかを画面内に置く（権限名だけでは伝わらない）。
  ・**AIレビュー**は観点ごとに `必ず直す / 教えてもらうだけ / 見ない` を選ばせる。
  全部を必須にすると出せなくなり、全部を任意にすると誤字が出る。誤字・数字・言ってはいけない表現だけ既定で「必ず直す」。
  自社ルールを文章で足せるようにする。
- **広告**: 一覧 + 作成（3ステップ）を1画面で切り替える。**投稿作成のモーダルを流用しない**（別のものを同じ形で出すと、いま何を作っているのか分からなくなる）。
  ・ステップは**ユーザーが決めることだけ**にする。`なんのために / だれに・いくら / できた広告を見る` の3つ。
  それ以外（見出し5案・説明5案などの媒体仕様）は**AIが埋めて折りたたむ**。どこに出る文字か分からない欄を並べない。
  ・**予算と期間は必ず聞く**。`1日あたり × 日数 = 合計` をその場で計算して大きく出す（総額が分からないまま決めさせない）。
  予算が未設定の広告は、一覧で**出せない理由として警告**を出す（「未設定」とだけ書いて放置しない）。
  ・目的は業界用語を使わず `お店を知ってもらう / 来てもらう / フォローしてもらう` の3つ。
  ・広告にするものは、**反応がよかった投稿を先に見せる**（いちばん失敗しない道を既定にする）。
  ・生成待ちは**黒い箱で待たせない**。いま何をしているか（お店の情報を読む→過去の反応を見る→文を書く→画像を選ぶ）を段階で出し、
  閉じても続くことと、終わったら知らせることを明記する。**生成前の空フォームは出さない**。
  ・できあがりは**実際に出たときの見え方**を主役にする。直せるのは「はじめの一文」と「ボタンの文字」だけに絞り、
  合わないときは「別の案を見る」。最後に `目的 / 出す先 / 相手 / 期間 / かかるお金` を確認してから出す。
  ・一覧では**お金の使いぐあいをバー**で出し、結果は `見られた回数 / 反応された回数 / プロフィールを見た人` の3つに絞る。
- **発注相談 / 出張撮影**: 広告作成と並ぶ「プロに頼む」3つ。上のタブで行き来できるようにする（別々のページに散らさない）。
  ・**送ったあと何が起きるかを、送る前に見せる**（相談→見積り→OKしたら制作→ドライブに納品）。
  相手が見えない依頼は送るのが怖いので、日数の目安も出す。
  ・**「相談だけならお金はかかりません」を最初に言い切る**。ここで止まる人がいちばん多いところ。
  ・依頼の返事は**チャットにスレッドを立てる**（[[チャット]]）。メールを探させない。
  ・納品は**ドライブに入る**（[[いいねドライブ]]）。渡した参考素材もドライブから選ぶ。
  ・住所や店舗情報は**プロジェクト管理から自動で入れる**。同じことを二度書かせない。
  ・送ったら**何を送ったのかをそのまま見せる**（送信して終わりの画面にしない）。過去の依頼も同じ画面に置く。
- **カレンダー**: `月 / 週 / 日` を切り替えられる（Googleカレンダーと同じ並び・同じ位置に置く。見慣れた形から動かさない）。
  ・**カレンダーは「予定を見る」だけでなく「日を決める」画面**。日・時間の枠を押すと、
  **その日時が入った状態**で追加のポップオーバーが開く。あとから日付を選び直す手間をなくすため。
  ・追加は2つ出す。**新しく作る**（投稿作成フローへ）と、**できている下書きから置く**。
  日時未定の下書きは[[ToDo]]の「投稿する日が決まっていません」と同じものを指す。置いた時点で予約済みになる。
  ・**日にちが決まっていない投稿は、カレンダーの右に「未確定」の欄を作って置いておく**。
  カレンダーの日・時間の枠へ**ドラッグして置くと、その日時で予約**される。「どこに置くか決める」作業がそのまま操作になる。
  月の枠に落としたときは時間が決まらないので、**その曜日のおすすめ時間**（無ければ19:00）を入れる。
  ・未確定の欄とポップオーバーの「下書きから置く」は**同じものを見せる**。片方で置いたら両方から消す。
  ・置いたら**トーストで「◯月◯日 ◯◯:◯◯ に予約しました」**と短く出す。置けたのかどうかを推測させない。
  ・未確定が0件のときは「すべて日にちが決まっています」と言い切る（空の欄だけ残さない）。欄はたためる。
  ・**おすすめの投稿時間**（分析の上位3枠）は週・日でも示す。日付を決める場所に出すという方針([[おすすめ投稿時間]])に合わせる。
  その曜日に該当する枠が無い日は光らせない（関係ない時間を勧めない）。日ビューの一覧から押したときは、
  **次にその曜日が来る日**に置く。
  ・承認待ちの投稿は**破線の枠**で出す。出るかどうかまだ決まっていないものを、確定した予定と同じ見た目にしない。
- **チャット**: 3ペイン（アプリのサイドバー / 会話リスト / 会話）。**サイドバーの第一階層には置かず、ヘッダーの吹き出しから入る**。
  表示中はヘッダーの吹き出しを選択状態にして、いまどこにいるか分かるようにする。
  ・会話リストは `グループ` / `ダイレクトメッセージ` / **`投稿のスレッド`** の3区分。
  投稿の相談は投稿から始まるので、投稿単位のスレッドは独立して並べ、行にその投稿の状態（予約済み・確認待ちなど）も出す。
  ・**自分の発言も塗りは `primary-subtle` まで**。濃いオレンジは押せるものの色なので、吹き出しには使わない。
  ・未読は**「ここから未読」の区切り線**で示し、開いたらその位置まで送る。リストの未読バッジは開いた時点で消す。
  ・本文中で投稿を引用できる（サムネ＋タイトル＋状態）。どの投稿の話か、さかのぼらずに分かるようにするため。
  ・送信欄には画像添付とあわせて**「ドライブから」**を置く（[[いいねドライブ]]と同じ素材をそのまま使えるようにする）。
- **いいねドライブ**: 3ペイン（ツリー / ファイル一覧 / ファイル詳細ドロワー）。
  ・統合した「学習」は**フォルダで混ぜず、画面上部のタブで分ける**（`素材` / `学習`）。
  役割が違うものを同じ階層に置くと、投稿に貼る写真とAIに読ませる資料が混ざるため。
  **素材＝投稿にそのまま貼るもの／学習＝AIが読んで参考にするもの**。この違いは学習タブの先頭で必ず文章で言い切る。
  ・学習の各資料には**読み込み状態**（学習済み / 読み込み中 / 読み込み失敗）を必ず出す。入れただけで効いていると誤解されるため。
  ・ファイル詳細には「この素材で投稿を作る」（→投稿作成フローへ）と**この素材を使った投稿の逆引き**を置く。
  同じ写真の使い回しに自分で気づけるようにするため。
  ・**投稿作成フローの「いいねドライブから選択」は、この画面と同じ階層・同じフォルダ名で見せる**。
  別物に見えると「さっき入れた写真がない」と探しに戻ることになる。フローのピッカーには
  「学習に入れた資料はここには出ません」と明記し、ドライブ本体への導線も置く。
  ・「台本テンプレ」フォルダは作らない（[[投稿タイプ一覧の廃止]]に合わせる）。
  ・容量表示とアップグレード導線はツリー下部の1箇所だけ。ファイル一覧側には出さない。
- **サイドバー下部スイッチャー（プロジェクト＋アカウント複合）**: 最下部の1枠に「現プロジェクト名 + アカウント名」を2段表示、
  クリックで**上にポップオーバー展開**。中身＝検索付きクライアント一覧（現在のものに `check`）+ 「新しいクライアントを追加」+ 区切り +
  アカウント操作（設定 / プラン・支払い / ログアウト）。代行・多数クライアント運用が前提。
  ・**クライアント識別はアイコン + カラーで行う**（名前だけだと「A社/A商事」を誤認＝誤爆の元）。各クライアントに固定の識別色/アイコンを持たせる。
  ・右上メニューにあったナビ系はサイドバー本体に吸収（ホームはロゴクリックでも可）。
- **生成トレイ（右下・バックグラウンド処理の集約）**: 動画生成/画像生成/解析などの進行は**ヘッダーに置かない**（複数並走で破綻するため）。
  Google ドライブのアップロード進捗と同型で、**右下に集約トレイ**として積み上げ表示（複数並走可・最小化可・全画面で追跡可）。
  各行は `Marker`（shimmer + `role=status`）で表現し、クリックで該当投稿へ遷移。**完了時は sonner トーストで通知**（右下は見落とされやすいため）。
  マスコット FAB と同じ右下コーナーに同居し、そこが非同期処理の定位置になる。

**禁止**: A系の部品を手で再実装しない（Atlassian の DESIGN.md 教訓＝再発明はトークン浪費と実装ブレの元）。

### Directory からの調達ポリシー（拡張時）

不足部品は自作より shadcn Registry Directory を優先。ただし**「全部入れ」は禁止**（＝方言の逆流。
このプロジェクトで駆逐した slate 乗っ取り・色分裂を別registryが再持ち込みする）。採用チェック:

1. **トークン駆動か**：CSS変数でテーマできるか。色をハードコードしてる品は不採用。
2. **実際の穴を埋めるか**：機能重複・装飾目的だけなら見送り（公式で足りるものは公式で）。
3. **公式(shadcn/ui)を最優先**。コミュニティ製は第三者製ゆえ install 時に必ずコード確認。
4. **見た目特化系は原則不採用**（glassmorphism / 8bit / Tron 等＝独自の見た目でブランド一貫性を壊す）。

採用したら globals.css(=DESIGN.md生成物)のトークンで塗り直し、いいねAI固有の使い方があれば B系に1行追記。
現状の採用候補: 音声波形/試聴プレイヤー ◎、画像アップロード(Dropzone) ◎、日時ピッカー ◎(公式)、
リッチエディタ ○、AIプロンプト/提案 ○(公式chat一式と重複注意)、データテーブル ○。

## Do's and Don'ts

**Do**
- オレンジは「押せる・選ばれてる・進む先」だけに使う。**装飾・見出しアイコン・補助バッジ・非対話の要素にオレンジを使わない**（塗りすぎると主役が埋もれる）。迷ったらニュートラル（`foreground`/`muted-foreground`/`border`）に落とす。
- **色は役割で分ける**：オレンジ`primary`＝インタラクション（押せる/選択中/現在地）、赤`destructive`＝**警告系（必須・エラー・未入力・危険）に統一**。「必須」バッジや未入力の注意はオレンジではなく `destructive` を使う（オレンジの純度を保ち、赤で"止まれ/直せ"を一貫させる）。
- 状態は色 + 形/アイコンのセットで表す（SNSバッジ = 色 + Tabler アイコン、状態バッジ = subtle背景 + solid文字）。
- **アイコンは全て Tabler Icons（`ti-*`）から。絵文字はUIに使わない**（🦊マスコット等の意匠を除く）。
- **配布用ワイヤーHTML はアイコンフォントを woff2 ごと埋め込む（CDN直リンク禁止）**＝再現性が壊れる/豆腐化を防ぐ。
  ※これはスタンドアロンのワイヤーHTML限定。実プロダクト（Next+shadcn）は npm で `@tabler/icons-react` を使う。
- 白文字は primary/success/destructive の**大字・太字ラベル限定**。
- 選択UIは役割で使い分ける（タブ/ピル/セグメント/チェック）。無理に1種類へ統一しない。
- radius・色・サイズは必ずトークンから引く。globals.css は DESIGN.md からの生成物として扱う。
- 待ち・進行・完了・システム通知は `Marker` に統一（チャット外の解析待ち等も含む）。個別の自作ローディングを作らない。

**Don't**
- 純黒 #000・寒色グレーを使わない（暖色ニュートラルを保つ）。
- 機能ごとに新しいアクセント色や状態色をその場で足さない。
- SNSを色だけで区別しない（必ず Tabler アイコンを添える）。
- 本文サイズの白文字をオレンジ地に乗せない（コントラスト不足）。
- 専用リンク色を導入しない（ホバー下線で表現）。
- shadcn 部品を無視して同等コンポーネントを手で再実装しない。
- 汎用部品（Accordion/Sheet/Select 等）を DESIGN.md でフルスペック化しない（調達方針A参照。列挙どまり）。
- **左カラーライン（border-left で色帯を付ける装飾）を使わない**。セクション区切りは面の色差・ボーダー・余白で表現する。色帯はノイズになり、primary の役割（押せる・選ばれてる）を侵食する。

**Superseded（旧ナレッジからの明示的な失効）**
- 「React + インラインスタイルのみ / Tailwind禁止 / position:fixed禁止」は Builder.io・プレビューHTML時代の
  制約であり、**shadcn + Tailwind v4 + Next 採用に伴い失効**。今後は Tailwind ユーティリティ + shadcn 部品 +
  上記トークンで実装する。short-form の `C.pr` 命名も廃止し、shadcn 準拠のセマンティック名（primary 等）に一本化。
