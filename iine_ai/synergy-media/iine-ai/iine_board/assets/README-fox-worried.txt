iine-fox-worried.png は暫定です（2026-08-19）

キツネアラートの黄色（.fox-alert.care）用に「涙なし・ハの字眉・口は横一文字」の
困り顔を新規に描く予定でしたが、この環境では生成できませんでした:

  - GEMINI_API_KEY が無効（nanobanana / Gemini が 401 を返す）
  - Codex 組み込みの image_gen が codex exec（非対話）から呼べない

そのため今は iine-fox-face.png（ヘッドセット付きの普通の顔）のコピーを置いています。
本番の絵ができたら、このファイルを同じ名前で上書きするだけで全画面に反映されます
（参照しているのは fox-alert.css ではなく各HTMLの img src。差し替えはファイル1つ）。

sad / happy と同じ 1254x1254 前後・顔アップ・透過PNG・ヘッドセットなしで揃えてください。
