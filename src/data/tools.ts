export interface ToolItem {
  id: string;
  title: string;
  catchphrase: string;
  description: string;
  url: string;
  tags: string[];
  badge?: string;
  features: string[];
  status: 'active' | 'beta' | 'coming-soon';
  releaseDate: string;
}

export const toolsData: ToolItem[] = [
  {
    id: 'stampcreator',
    title: 'StampCreator',
    catchphrase: 'LINEスタンプ クイックメーカー - スマホ完結・規格準拠画像セット一括生成',
    description: 'スマートフォンやPCのブラウザだけで完結。イラスト画像をアップロードするだけで、LINE Creators Marketの厳格な画像サイズ・解像度・余白ルールに自動適合し、メイン画像・タブ画像・スタンプ画像一式をZIPで即座に一括生成できる制作支援Webツールです。',
    url: 'https://stampcreator.unagichan.com/',
    tags: ['Webツール', 'LINEスタンプ', '画像自動整形', 'スマホ対応', '無料'],
    badge: 'FLAGSHIP TOOL',
    features: [
      'LINE Creators Marketの公式規格に完全自動準拠',
      'メイン画像(240×240)・タブ画像(96×74)・スタンプ画像(最大370×320)を自動作成',
      'スマホのブラウザでも軽快に動作する直感UI',
      '一括ZIPダウンロードでそのまま申請可能',
      '完全クライアント処理で画像データのプライバシーを保護'
    ],
    status: 'active',
    releaseDate: '2026-09'
  },
  {
    id: 'ai-prompt-lab',
    title: 'Cyber Prompt Lab (構想中)',
    catchphrase: 'クリエイター向けプロンプト＆アセット最適化ジェネレーター',
    description: 'イラスト制作やデザイン生成における呪文（プロンプト）の調整や、スタンプ向きの構図・差分作成を強力に支援するジェネレーターツール（近日公開予定）。',
    url: '#',
    tags: ['AIプロンプト', '画像生成支援', '近日公開'],
    badge: 'COMING SOON',
    features: [
      'LINEスタンプに最適な表情・構図プロンプトプリセット',
      '商用利用を考慮したプロンプト整理',
      'タグごとのクイックコピー機能'
    ],
    status: 'coming-soon',
    releaseDate: 'Coming Soon'
  }
];
