# INDEX — いいねAI vault の玄関口

全ページを1行説明つきで列挙。AIはここで「何があるか」を把握し、必要なページだけ開く。
新ページを作ったら**必ずここに1行足す**。

> ⚖️ 裁定ルール: **デザインはDESIGN.mdが正**。プロダクト仕様は最新の会議が正。矛盾は [[superseded]] に集約。

## entities/ — 具体物（1個1ページ）

- [[iine-ai]] — プロダクト本体。機能・連携SNS・コピーの声・スタック。
- [[hina]] — 陽菜（デザイナー/クライアント）。担当・環境・応答ルール。
- [[resme]] — レスミー（混同注意の別プロダクト）。
- [[cursor]] — 開発環境。コード直接不可・URL+スクショ縛りの前提。
- [[shadcn-ui]] — 部品調達元。そのまま使う一覧+調達ポリシー。
- [[tabler-icons]] — 唯一のアイコン系。SNSブランドアイコン対応。
- [[design-tokens]] — トークン現行値。源泉はDESIGN.md。
- [[dev-environment]] — ビルド実行・成果物出力の定型。
- [[creation-flow]] — 投稿作成フロー（4作成方法・5ステップ・分岐）。
- [[post-list-page]] — 投稿一覧v16（3タブ・カードグリッド・承認フロー・詳細sheet）。
- [[video-flow]] — AI動画生成フロー（4ステップ縦ステッパー）。
- [[script-gen-page]] — AI台本生成ページ（2カラム+テスト動画）。
- [[iine-drive]] — いいねドライブ（3ペイン・逆引き連携）。
- [[template-feature]] — テンプレ機能（一覧v2・チャット作成・5画面）。
- [[editing-surfaces]] — 画像編集/動画作成/投稿編集の各画面。
- [[help-page]] — ヘルプページ（動画・図解で機能説明、6/19方針）。

## concepts/ — 判断・パターン・教訓（1個1ページ）

デザイン系（源泉=DESIGN.md）:
- [[orange-only-interaction]] — オレンジは押せる/選ばれてる/進む先だけ。
- [[warm-neutral-no-black]] — 暖色ニュートラル。純黒・寒色グレー禁止。
- [[state-color-plus-glyph]] — 状態は色+形/アイコンのセット。
- [[editor-dark-theme]] — エディタは別世界のダークUI。暖色3段+純黒ステージ。
- [[marker-loading-unification]] — 待ち・進行・完了はMarkerに統一。
- [[component-procurement]] — 汎用はshadcnそのまま、固有だけルール化。

プロダクト系（源泉=会議/worklog）:
- [[flow-ui-decided]] — チャットvsフロー論争はフローUIで確定。
- [[room-concept-abolished]] — ルーム概念は廃止、投稿フロー統合。
- [[omakase-vs-craft]] — 作り込み派と効率化派の両立・おまかせ作法。
- [[test-video-vs-editor]] — テスト動画とエディタの役割分離。
- [[filter-chip-vs-dropdown]] — PCチップ/SPドロップダウンの使い分け。
- [[tab-phase-optimization]] — 3タブは主役情報を変える。
- [[ai-generation-two-patterns]] — AI生成2パターン・素材任意・即時反映。
- [[vertical-stepper-standard]] — 手続きは縦ステッパー・ロックしない。
- [[drive-vs-learning]] — ドライブ=素材/学習=外部情報の区別。
- [[target-first]] — ターゲット整理が全ての前提。
- [[wire-checklist]] — ワイヤーHTML新規作成時のヘッダー・サイドバー・アイコン確認リスト。
- [[superseded]] — 失効した旧仕様と矛盾の裁定（★迷ったらここ）。

## raw/ — 生素材（読み取り専用・書き換え禁止）

- [[raw/README]] — なぜrawを触らないか。
- [[raw/figma-screens]] — Figma画面一覧（fileKey/node ID）。
- [[raw/version-history]] — 投稿作成フロー v1→v15 の変遷。
- [[raw/mtg-2026-05-29-sato]] — 5/29佐藤MTG（論点提示）。
- [[raw/mtg-2026-05-31-keisuke]] — 5/31会議（多くの方針が確定）。
- [[raw/worklog-2026-06-03-04]] — 6/3-4作業進展ログ。
