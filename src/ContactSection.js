import React from 'react'

import Table from './Table'

const list = [
  {th:'Mail',td:'<a href="mailto:kota.kaicho@gmail.com">kota.kaicho@gmail.com</a>'},
  {th:'Twitter',td:'<a href="http://twitter.com/uutarou10">@uutarou10</a>'}
];

const ContactSection = () => {
  return (
    <div id="ContactSection">
      <h2>Contact</h2>
      <Table list={list} />
    </div>
  );
}

export default ContactSection;
