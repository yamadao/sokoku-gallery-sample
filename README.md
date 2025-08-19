# Sokoku Gallery Starter (Next.js 14 + TS + Tailwind)

最小構成のハンズオン用スターターです。clone → install → dev ですぐ動作します。

## 特徴
- Next.js v14（App Router）
- TypeScript 有効
- Tailwind CSS セットアップ済み
- `yarn.lock` 同梱（npm/pnpm の lockfile は不要）
- 余白（UI ライブラリ未導入）

## 必要環境
- Node.js 18.17+（Corepack 同梱版推奨）
- Corepack 有効化（初回のみ）

```bash
corepack enable
```

## クイックスタート
```bash
git clone <REPO_URL>
cd sokoku-gallery-sample

# Yarn は packageManager を見て Corepack が自動取得
yarn install

# 環境変数を用意（例は Git Bash/macOS/Linux）
cp .env.local.example .env.local
# .env.local を開いて NEXT_PUBLIC_LIST_API_BASE を設定

# 開発起動
yarn dev
```

## 環境変数
- `.env.local` に以下を設定してください（`.env.local.example` をコピーして利用）。
```
NEXT_PUBLIC_LIST_API_BASE= https://xxxx.workers.dev
```
- `NEXT_PUBLIC_` で始まる変数はブラウザにも公開されます。

## ドキュメント（ハンズオン定義）
- 事前に決めた共通ルールと、穴埋め式で MVP を完成させるための超ミニ定義書は以下を参照してください。
  - `docs/GALLERY_SPEC.md`

## NPM スクリプト
```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  }
}
```
