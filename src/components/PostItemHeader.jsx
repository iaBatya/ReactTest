import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import {Table} from 'reactstrap';


const PostItemHeader = () => {
    
    const [selectedSort, setSelectedSort] = useState('')
    


    return (
        <Table
      bordered
      hover
      >
        <thead>
          <tr>
            <th>
                <span>Category </span>
                <select>
                    <option  value={selectedSort}>default</option>
                    <option  value={selectedSort}>sorted</option>
                </select>
            </th>
            <th>
                Name
            </th>
            <th>
                <span>Price </span>
                <select
                    
                >
                    <option value="value1">default</option>
                    <option value="value2">sorted</option>
                </select>
            </th>
            <th>
                Actions
            </th>
          </tr>
        </thead>
        </Table>
    );
};

export default PostItemHeader;