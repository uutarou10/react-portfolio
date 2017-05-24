import React from 'react'

import Table from './Table'

const list = [
  {th:'Name',td:'Kota Nonaka'},
  {th:'School',td:'Tokyo University of Technology'},
  {th:'Loacation',td:'Kanagawa, Japan'},
  {th:'Twitter',td:<a href="http://twitter.com/uutarou10" target="__blank">@uutarou10</a>},
  {th:'Blog',td:<a href="http://yurufuwa-tech.hatenablog.com" target="__blank">ゆるふわ技術日誌</a>},
  {th:'Github',td:<a href="https://github.com/uutarou10" target="__blank">uutarou10</a>},
];

const AboutSection = () => {
  return <Table list={list} />
}

export default AboutSection;
