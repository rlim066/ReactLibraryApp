import React from "react";
import data from './data.json';

function ViewBooks() {
  return(
    <div>
      <table> 
        <tr>
          <th> Title </th>
          <th> Year </th>
          <th> Author</th>
          <th> Type </th>
          <th> Genre</th>
        </tr>
        {data.map((val,key) => {
          return (
            <tr key={key}>
              <td>{val.Title}</td>
              <td>{val.Year}</td>
              <td>{val.Author}</td>
              <td>{val.Type}</td>
              <td>{val.Genre}</td>
            </tr>
          )
        })}
        </table>
    </div>
  );
}
export default ViewBooks;