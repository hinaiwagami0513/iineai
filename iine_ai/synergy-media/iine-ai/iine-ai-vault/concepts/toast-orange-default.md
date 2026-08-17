# toast-orange-default

> トーストは既定オレンジ、赤はエラーだけ。sonner 既定の緑/赤/青/黄は使わない。

（源泉: DESIGN.md「Toast（sonner）の配色」）

## 決めたこと（2026-08-17）

| 種類 | 背景 | 枠 | アイコン | 文字 |
|---|---|---|---|---|
| 既定 / `info` / `success` / `warning` | `primary-subtle` | `primary` 30% | `primary` | `foreground` |
| `error` | `destructive-subtle` | `destructive` 30% | `destructive` | `foreground` |

種類を付けずに `toast('保存しました')` と呼んでもオレンジ。**既定がオレンジ**という意味。

## なぜ

- sonner の rich-colors をそのまま使うと、成功が緑・情報が青になる。
  いいねAIの画面に青い通知が出ると、そこだけ別プロダクトの顔になる。
- 実際の使用比率は info 60 / success 41 / plain 24 / error 14 / warning 1。
  **大半が「うまくいった・お知らせ」**なので、それをブランド色で受けるほうが自然。

## 効かせ方の注意

- **色を持つのは背景・枠・アイコンだけ。本文は `foreground`。**
  オレンジ文字は読みにくいうえ [[orange-only-interaction]] の「オレンジ=押せる」と衝突する。
  トーストは押すものではない。
- 4種が同じオレンジになるので、**区別はアイコンの形**で付ける（✓ / i / ⚠ / ✕）。
  [[state-color-plus-glyph]] の「色だけで状態を表さない」はここでも守る。
- **黄を warning に使わない。**オレンジと近すぎて2色に見えず、注意が伝わらない。

## 実装

- 実プロダクト（Next+shadcn）: sonner に `toastOptions.classNames` でトークンを当てる。
- 配布用スタンドアロンHTML: `iine_board/sonner.js` が同じ配色を持つ。全ワイヤーが読む。

関連: [[design-tokens]] / [[orange-only-interaction]] / [[state-color-plus-glyph]] / [[component-procurement]]
