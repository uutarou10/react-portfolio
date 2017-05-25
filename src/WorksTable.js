import React from 'react'

const WorksTable = (props) => {
  return (
    <table>
      {props.worksList.map((item) => {
        return (
          <tbody>
            <tr>
              <th rowSpan="2"><a href={item.url} target="__blank">{item.title}</a></th>
              <td>{item.description}</td>
            </tr>
            <tr>
              <td>hogehoge</td>
            </tr>
          </tbody>
        );
      })}
    </table>
  );
}

export default WorksTable;
    
