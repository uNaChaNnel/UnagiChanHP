# うなぎちゃん公式サイト (UNAGI LAB Portal)

うなぎちゃん（[@UnagiChaaaaaN](https://x.com/UnagiChaaaaaN)）の公式ポータルサイトです。  
制作ツール（StampCreator等）の一覧機能、公式ブログ、プロフィール、およびGoogle AdSense審査に完全準拠した構成を備えています。

---

## 🛠 技術スタック
- **Framework**: [Astro v5](https://astro.build/) (Static Site Generation / SSG)
- **Hosting**: [Cloudflare Pages](https://pages.cloudflare.com/) (エッジ配信・帯域無制限・完全無料)
- **Styling**: Vanilla Modern CSS (Cyber / Dark Modern デザインシステム)
- **Blog Engine**: Astro Content Collections (Markdown / Type-Safe)
- **Monetization**: Google AdSense 審査・掲載対応（自動広告・個別スロット・ads.txt）
- **SEO**: 自動Sitemap生成 (`@astrojs/sitemap`), OGPメタデータ, カノニカルURL

---

## 🚀 ローカル開発

```bash
# 依存関係のインストール
npm install

# 開発サーバーの起動 (http://localhost:4321)
npm run dev

# 静的ビルドの実行 (/dist に出力)
npm run build

# ビルド成果物のプレビュー
npm run preview
```

---

## ☁️ Cloudflare Pages へのデプロイ手順

1. **GitHubにリポジトリをPush**:
   ```bash
   git init
   git add .
   git commit -m "feat: initial unagichan official portal"
   git branch -M main
   # GitHubで新規リポジトリを作成後、リモートを設定してPush
   git remote add origin https://github.com/<あなたのユーザー名>/<リポジトリ名>.git
   git push -u origin main
   ```

2. **Cloudflare ダッシュボードで設定**:
   - **Workers & Pages** > **作成** > **Pages** > **Git に接続**
   - GitHubリポジトリを選択
   - ビルド設定:
     - **フレームワーク プリセット**: `Astro`
     - **ビルド コマンド**: `npm run build`
     - **ビルド出力ディレクトリ**: `dist`
   - **保存してデプロイ** をクリック

3. **カスタムドメインの設定**:
   - Cloudflare Pages のプロジェクト画面から **カスタムドメイン** > `unagichan.com`（またはお好みのサブドメイン）を割り当て。

---

## 💰 Google AdSense 審査申請手順

当サイトはGoogle AdSenseの審査ガイドラインに沿って設計されています。以下の手順で申請を行ってください。

### 1. 審査用コードの埋め込み
Cloudflare Pages の **環境変数** または ローカルの `.env` ファイルに、AdSense管理画面で発行されるあなたのパブリッシャーIDを設定します：

```env
PUBLIC_ADSENSE_CLIENT_ID=ca-pub-XXXXXXXXXXXXXXXX
```
設定すると、すべてのページの `<head>` タグ内にAdSenseの自動広告・審査タグが自動的に挿入されます。

### 2. ads.txt の更新
`public/ads.txt` を開き、あなたのパブリッシャーIDに書き換えます：
```text
google.com, pub-XXXXXXXXXXXXXXXX, DIRECT, f08c47fec0942fa0
```

### 3. 審査用固定ページ
以下のAdSense必須ページがすでに完全装備されています：
- **プライバシーポリシー**: `/privacy-policy`（Cookie、AdSense規約、アクセス解析を明記）
- **免責事項**: `/disclaimer`
- **運営者情報 / プロフィール**: `/about`（X @UnagiChaaaaaN リンク掲載）
- **お問い合わせ**: `/contact`（X DM誘導・FAQ）

---

## ✍️ 新しいブログ記事の追加方法

`src/content/blog/` ディレクトリに新しい `.md` ファイルを作成するだけです：

```markdown
---
title: "記事のタイトル"
description: "記事の概要（SEOメタ説明文になります）"
pubDate: 2026-09-25
tags: ["LINEスタンプ", "個人開発"]
featured: false
---

ここに本文をMarkdownで記述します。
```

---

## 🔧 新しいツールの追加方法

`src/data/tools.ts` の `toolsData` 配列にオブジェクトを追加するだけで、トップページと「制作ツール一覧」ページに自動反映されます。
