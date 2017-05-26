import React from 'react'

import WorksTable from './WorksTable'

const worksList = [
  {title: 'SugoiLTTimer',url:'https://github.com/uutarou10/SugoiLTTimer',description:'はじめてelectronで作ったアプリ。LTイベント用タイマー。同じネットワーク上のPCから遠隔でコントロールできる機能付き。',techs:['Electron','Node.js','Socket.io']},
  {title: 'md2html',url:'https://github.com/uutarou10/md2html',description:'Markdownで書いた文書をHTMLに変換してCSSを当てるgulpfile',techs:['Node.js','Gulp']},
  {title: 'overlay-comment-tool',url:'https://github.com/uutarou10/overlay-comment-tool',description:'electronアプリ第2弾。Web画面から入力されたコメントを某動画サイト風にオーバーレイ表示できる。LTとかライブコーディングに是非。',techs:['Node.js','Electron','Express']},
  {title: '情報セキュリティレポート答え合わせツール',url:'https://udasecurity-1333.appspot.com',description:'RSA暗号の暗号化過程を示すレポート課題の答え合わせツール。自分用のつもりが結構多くの人が使ってくれた模様。',techs:['Python','Flask','Google App Engine']},
];

const WorksSection = () => {
  return (
    <div id="WorksSection">
      <h2>Works</h2>
      <WorksTable worksList={worksList} />
    </div>
  );
}

export default WorksSection;
