import React from 'react'

const Table = (props) => {
  return (
    <table>
      {props.list.map((item)=>{
        return(
          <tr>
            <th>{item.th}</th>
            <td>{item.td}</td>
          </tr>
        );
      })}
    </table>
  );
}

export default Table;
