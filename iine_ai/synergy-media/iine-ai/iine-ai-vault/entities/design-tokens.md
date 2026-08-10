# design-tokens（トークンの現行値）

> トークンの唯一の源泉は DESIGN.md。knowledge.md の旧値(短縮命名/角丸/weight)は失効。

## 源泉
- 現行の正は **DESIGN.md**（alpha・2026/07決定を含む＝knowledge.mdより新しい）。
- globals.css は DESIGN.md からの生成物。手で触らない。

## 主要トークン（現行）
- primary `#ef6108` / primary-light `#ff971e` / primary-subtle `#fff2e2`。
- 面: background `#f2f1f0` / surface `#fbfaf8` / card `#ffffff`。text `#2a2826` / muted `#757575`。
- 状態: success / warning / info / like / destructive（各 solid + subtle）。詳細は [[state-color-plus-glyph]]。
- 角丸: sm8 / md12 / lg16 / xl20 / full。**旧: 12/16/20/28 は失効**。
- タイポ: Noto Sans JP、weight 400/500/700/900 のみ。**旧: 800 は失効**。
- グラデ2種のみ（CTA / Hero）。maneku_dsのpink→yellowは廃止。
- エディタのダークトークンは [[editor-dark-theme]]。

## 失効した旧表現
`C.pr` 等の短縮命名 / 絵文字SNSバッジ / 角丸28 / weight800 → まとめて [[superseded]]。
