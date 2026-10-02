export interface ToolItem {
  id: string;
  title: string;
  catchphrase: string;
  description: string;
  url: string;
  tags: string[];
  badge?: string;
  image?: string;
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
  }
];
