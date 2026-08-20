# dev-environment（開発・実行の約束事）

> ビルド実行と成果物出力の定型。作業のたびに迷わないための固定手順。

- Node実行: `NODE_PATH=/home/claude/.npm-global/lib/node_modules node build_script.js`
- pip: `pip install --break-system-packages`
- 成果物: `/mnt/user-data/outputs/` に置いて present_files で共有。
- Volta管理Node（[[hina]]環境）はフルパス指定が要る場面あり。

## git は必ずパス明示

`~/dev` が公開リポジトリ `iineai` の git ルート。SHIP など別グループが同じ作業ツリーに同居しているので
`git add -A` は使わない。**push = 公開配信**。詳細と守り方は [[ship-separation]]。

関連: pptx等の別スキルの陽菜指定ルールは横断ルール（このvaultの範囲外だが [[cursor]] 併記）。
