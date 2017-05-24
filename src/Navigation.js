import React from 'react'

const Navigation = (props) => {
  return(
    <ul>
      {
        props.navList.map((item) => {
          return <li><a href={item.href}>{item.title}</a></li>;
        })
      }
    </ul>
  );
}

export default Navigation;
