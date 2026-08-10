# component-procurement

> 部品は2系統。汎用はshadcnからそのまま(A)、いいねAI固有だけ作り方ルールを書く(B)。

（源泉: DESIGN.md）

## A: shadcnからそのまま
トークンで自動テーマ。一覧は [[shadcn-ui]]。手で再実装しない（DESIGN.mdがプロンプトに入ると再発明しがち）。

## B: いいねAI固有（ルールだけ規定）
AIチャット(🦊) / 投稿カード / Attachment / ファイルアップロード(ReUI) / フォルダツリー(shadcnblocks)。
ファイル種別に新色を割り当てない（アイコン+mutedで区別。色は状態だけ）。

## 禁止
- A系を手で再実装しない。
- 左カラーライン(border-left色帯装飾)を使わない。区切りは面の色差・ボーダー・余白で。

関連: [[shadcn-ui]] / [[tabler-icons]] / [[marker-loading-unification]]
