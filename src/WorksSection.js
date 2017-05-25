import React from 'react'

import WorksTable from './WorksTable'

const worksList = [
  {title: 'SugoiLTTimer',url:'https://github.com/uutarou10/SugoiLTTimer',description:'はじめてelectronで作ったアプリ。LTイベント用タイマー。同じネットワーク上のPCから遠隔でコントロールできる機能付き。'}
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
