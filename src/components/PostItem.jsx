import React, { useState } from 'react';
import {Table, Button} from 'reactstrap'; 

// {category, itemName, price}


const PostItem = (props) => {
    const [selected, setSelected] = useState(0)
    const [newPrice, setNewPrice] = useState(props.post.price)

  function inc() {
    setSelected( selected + 1)
    setNewPrice (newPrice + props.post.price)
  }
  
  function dec() {
    setSelected( selected - 1)
    setNewPrice (newPrice - props.post.price)
  }
  
  
    return (
        <div className="post">
            <Table
                bordered
                hover
            >
                <tbody>
                    <tr>
                        <th scope="row">
                            {props.post.category}
                        </th>
                        <td>
                            {props.post.itemName}
                        </td>
                        <td>
                            {newPrice}$
                        </td>
                        <td>
                            <Button onClick={dec}>(-)</Button>
                            <span> Select </span> 
                            <Button onClick={inc}>(+)</Button>
                            <span> Selected: {selected} </span>
                            <Button>Add in cart</Button>
                            <span> </span>
                            <Button>Remove from cart</Button>
                        </td>
                    </tr>
                </tbody>
            </Table>
        </div>
    );
};

export default PostItem;