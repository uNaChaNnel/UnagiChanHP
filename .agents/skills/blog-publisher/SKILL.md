---
name: blog-publisher
description: >-
  Use this skill when authoring, updating, or formatting blog posts for the UnagiChan official portal. Ensures high SEO scores, Google AdSense compliance, rich Markdown formatting, and proper content collection frontmatter.
---

# Blog Publisher Skill

このスキルは、うなぎちゃん公式サイトの公式ブログに新しい記事を追加したり、既存の記事を更新・最適化する際の標準手順書です。

---

## 記事作成のワークフロー

### 1. 記事ファイルの配置
新しい記事は必ず `src/content/blog/` ディレクトリに英数字ハイフン区切りのファイル名（例: `how-to-create-line-stickers.md`）で作成します。

### 2. Frontmatter の定義
Astro 5 の型定義に準拠した以下のFrontmatterを先頭に記載します：

```markdown
---
title: "ユーザーの課題を解決する具体的かつ魅力的なタイトル（30〜45文字程度）"
description: "検索結果やOGPに表示される要約文。クリックしたくなる内容（80〜120文字）"
pubDate: 2026-09-25
tags: ["LINEスタンプ", "Web開発", "StampCreator"]
featured: false # トップに強調表示する場合は true
---
```

### 3. 本文構成のベストプラクティス (AdSense & SEO)
- **導入文 (Lead)**: 読者が直面している悩み・疑問を共感し、この記事で解決できる結論を冒頭3行で示す。うなぎちゃん（@UnagiChaaaaaN）の自己紹介を自然に添える。
- **見出し構造 (H2, H3)**: H1は記事タイトルに自動割り当てされるため、本文内は必ず `##` (H2) から開始し、必要に応じて `###` (H3) を使う。
- **箇条書き・リストの活用**: 読みやすさを高めるため、重要ポイントはリスト（`- `）で整理する。
- **内部リンク・ツール導線**: StampCreator（`https://stampcreator.unagichan.com/`）やサイト内の関連記事への自然なリンクを適宜挿入する。
- **まとめ**: 読者が次に取るべきアクションを示し、X（[@UnagiChaaaaaN](https://x.com/UnagiChaaaaaN)）への感想・フィードバックを呼びかける。

### 4. ビルド検証
記事を作成したら、必ずターミナルでビルド検証を実行します：
```bash
npm run build
```
エラーなく `/blog/<スラッグ>/index.html` が出力され、`sitemap-index.xml` に反映されていることを確認してください。
