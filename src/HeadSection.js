import React from 'react'

import Navigation from './Navigation'

const HeadSection = (props) => {
  return(
    <section className="head-section">
      <h1>{props.title}</h1>
      <Navigation navList={
        [{href:"#",title:"nav"},{href:"#",title:"nav"}]
      }/>
    </section>
  );
} 

export default HeadSection;
