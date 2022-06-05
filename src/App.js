import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Table, Button} from 'reactstrap'; 





function App() {
  
  const [selected, setSelected] = useState(0)


  function inc() {
    setSelected( selected + 1)
  }
  
  function dec() {
    setSelected( selected - 1)
  }
  
  
  
  
  
  return (
    <Table
      bordered
      hover
      >
        <thead>
          <tr>
            <th>
                Category ^
            </th>
            <th>
                Name
            </th>
            <th>
                Price ^
            </th>
            <th>
                Actions
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">
                Aaaa
            </th>
            <td>
                aaaa
            </td>
            <td>
                aaaa
            </td>
            <td>
                <Button onClick={dec}>(-)</Button>
                 <span> Select </span> 
                <Button onClick={inc}>(+)</Button>
                <span> {selected} </span>
            </td>
            </tr>
          <tr>
            <th scope="row">
                aaa
            </th>
            <td>
                aaa
            </td>
            <td>
                aaaa
            </td>
            <td>
                <Button>(-)</Button>
                 <span> Select </span> 
                <Button>(+)</Button>
            </td>
          </tr>
          <tr>
            <th scope="row">
                aaaa
            </th>
            <td selected={false}>
                aaa
            </td>
            <td>
                aaa
            </td>
            <td>
                <Button>(-)</Button>
                 <span> Select </span> 
                <Button>(+)</Button>
            </td>
          </tr>
        </tbody>
    </Table>
  );
}

export default App;
