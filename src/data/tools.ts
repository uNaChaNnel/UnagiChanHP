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
  },
  {
    id: 'ai-prompt-lab',
    title: '案くれ',
    catchphrase: '【アイデア・要望募集中】スタンプ用プロンプト生成＆最適化ツールへのご意見・案を募集！',
    description: 'LINEスタンプ制作に役立つセリフ・ポーズの一括プロンプト生成や画像生成支援ツールの開発構想中。「こんな機能があれば便利」「こういうプロンプト一括設定が欲しい」というクリエーターの皆様からのアイデア・要望を大募集中です！',
    url: 'https://x.com/intent/tweet?text=%40UnagiChaaaaaN%20%E3%81%86%E3%81%AA%E3%81%8E%E3%81%A1%E3%82%83%E3%82%93%E3%81%AE%E6%96%B0%E3%83%84%E3%83%BC%E3%83%AB%E3%80%81%E3%81%93%E3%82%93%E3%81%AA%E6%A9%9F%E8%83%BD%E3%81%8C%E6%AC%B2%E3%81%97%E3%81%84%EF%BC%81%20%E3%80%90%E6%A1%88%E3%81%8F%E3%82%8C%E3%80%91',
    tags: ['案くれ', 'アイデア募集中', 'AIプロンプト', '画像生成支援', '近日公開'],
    badge: 'IDEA WANTED // 案くれ',
    image: '/ankure.png',
    features: [
      'LINEスタンプに最適な表情・構図・セリフの一括プロンプト出力',
      'CSV一括設定やランダム生成など、クリエーターの要望をもとに実装予定',
      'X（@UnagiChaaaaaN）で「こんな機能欲しい！」という案をお待ちしています'
    ],
    status: 'coming-soon',
    releaseDate: 'アイデア集まり次第'
  }
];
