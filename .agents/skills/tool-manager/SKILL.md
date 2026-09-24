---
name: tool-manager
description: >-
  Use this skill when adding, updating, or managing web tools and apps featured on the UnagiChan official portal. Ensures proper metadata, URL linking, and cyber-card rendering in both homepage and directory.
---

# Tool Manager Skill

このスキルは、うなぎちゃんが開発したWebツール（StampCreatorや今後追加される自作ツール群）を公式サイトに追加・更新・管理するための標準手順書です。

---

## ツール管理のワークフロー

### 1. データ定義ファイルの編集
すべてのツールデータは `src/data/tools.ts` にて一元管理されています。
新しいツールを追加する場合、`toolsData` 配列に以下の `ToolItem` オブジェクトを追記します：

```typescript
{
  id: 'unique-tool-id', // 英数字ハイフン
  title: 'ツール名',
  catchphrase: '簡潔なキャッチコピー（例: スマホ完結・規格準拠画像セット一括生成）',
  description: 'ツールの詳細説明文。ユーザーのどんな課題を解決するかを2〜3文で記述。',
  url: 'https://tool-subdomain.unagichan.com/', // または外部リンク
  tags: ['Webツール', '自動化', 'スマホ対応'],
  badge: 'NEW', // オプション: 'FEATURED', 'NEW', 'BETA' 等
  features: [
    '主な特徴1',
    '主な特徴2',
    '主な特徴3'
  ],
  status: 'active', // 'active' (公開中) | 'beta' (ベータ) | 'coming-soon' (開発中)
  releaseDate: '2026-09'
}
```

### 2. 反映先の確認
`src/data/tools.ts` を更新すると、以下のページに自動的に反映されます：
- **トップページ (`/`)**: 先頭の注目ツールおよび最新ステータス
- **制作ツール一覧 (`/tools`)**: 全ツールの一覧カードおよび詳細

### 3. 表示確認とビルド検証
編集後は必ずビルド検証を行い、型エラーや未定義プロパティがないことを確認します：
```bash
npm run build
```
ローカルサーバーで `/tools` を開き、カードの見た目、ボタンスタイル、外部リンク（`target="_blank" rel="noopener noreferrer"`）の挙動を確認します。
