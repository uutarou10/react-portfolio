import React from 'react'

import Table from './Table'

const list = [
  {th:'Name',td:'Kota Nonaka'},
  {th:'School',td:'Tokyo University of Technology'},
  {th:'Location',td:'Kanagawa, Japan'},
  {th:'Twitter',td:<a href="http://twitter.com/uutarou10" target="__blank">@uutarou10</a>},
  {th:'Blog',td:<a href="http://yurufuwa-tech.hatenablog.com" target="__blank">ゆるふわ技術日誌</a>},
  {th:'Github',td:<a href="https://github.com/uutarou10" target="__blank">uutarou10</a>},
];

const AboutSection = () => {
  return (
    <div id="AboutSection">
      <h2>About me</h2>
      <Table list={list} />
    </div>
  );
}

export default AboutSection;
