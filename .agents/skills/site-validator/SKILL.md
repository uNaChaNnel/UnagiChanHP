---
name: site-validator
description: >-
  Use this skill to perform automated pre-deployment validation, build verification, Google AdSense compliance checks, sitemap inspection, and link consistency checks on the UnagiChan official portal.
---

# Site Validator Skill

このスキルは、サイトのデプロイ前や大きな改修を行った後に、品質・ビルド・AdSense適合性を網羅的に点検・検証するための手順書です。

---

## 点検チェックリストと実行コマンド

### 1. 静的ビルドテスト (Static Build Test)
以下のコマンドを実行し、TypeScriptエラー、Astro構文エラー、Content Collectionのスキーマエラーがないことを確認します：

```bash
npm run build
```
- **確認事項**:
  - `Complete!` と表示され、終了コードが `0` であること。
  - 出力ディレクトリ `dist/` に全HTMLファイル、`sitemap-index.xml`、`ads.txt`、`robots.txt` が生成されていること。

### 2. Google AdSense 審査適合性チェック (AdSense Audit)
以下の4大固定ページが正しくビルド成果物に含まれているか確認します：
- `dist/privacy-policy/index.html` (プライバシーポリシー)
- `dist/disclaimer/index.html` (免責事項)
- `dist/about/index.html` (運営者情報・プロフィール)
- `dist/contact/index.html` (お問い合わせ窓口)

また、`dist/ads.txt` がルートに正しくコピーされていることを確認します。

### 3. SEO & メタデータ検証
主要ページの `<head>` タグ内に以下が正しくレンダリングされているか確認します：
- `<title>`: ページ固有のタイトル（30〜60文字）
- `<meta name="description">`: 固有の説明文
- `<link rel="canonical">`: 正規化URL
- `<meta property="og:image">`: OGP画像URL（`/og-image.png`）
- `<meta name="twitter:creator">`: `@UnagiChaaaaaN`

### 4. 外部リンク & ナビゲーション整合性
- StampCreatorへのリンク（`https://stampcreator.unagichan.com/`）が `rel="noopener noreferrer"` で安全に設定されているか。
- Xへのリンク（`https://x.com/UnagiChaaaaaN`）が正しく配置されているか。
