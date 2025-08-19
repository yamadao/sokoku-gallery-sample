# ギャラリー定義書（MVP）

## 固定ルール（全員共通）
- APIのURL：＜ここに貼る＞ 例）`https://xxxx.workers.dev/api/list`
- APIの内容：
  - `GET /api/list`           → `{ "people": ["aaa","bbb"], "nextCursor": null }`
  - `GET /api/list?person=xx` → `{ "items": [{ "key": "xx-001.jpg", "url": "https://.../xx-001.jpg" }], "nextCursor": null }`
- これに沿って **Next.js（App Router）+ Tailwind CSS** でギャラリーページを作る

---

## やりたいこと（MVP）
- 例：トップに people をカード表示し、クリックで `/[person]` に遷移
- 例：`/[person]` に items をグリッド表示（画像は `url` を `<img>` に差す）
- 例：画像クリックでモーダル拡大（Escで閉じる）

## みための要望（自由記入）
- 例：3〜5列のレスポンシブグリッド
- 例：余白ゆったり／角丸／影あり
- 例：ダークモード対応したい（余裕があれば）

## 追加の希望（任意）
- 例：ローディング表示／エラー時のリトライボタン
- 例：並び替え（新しい順）や検索ボックス
- 例：キーボード左右で前後移動

## 禁止・注意（共通）
- シークレットキーは使わない／フロントに置かない
- 画像URLはそのまま `<img>` に使う（Canvasで触らない前提）
- 連番穴あきでも「存在する items だけ表示」でOK 