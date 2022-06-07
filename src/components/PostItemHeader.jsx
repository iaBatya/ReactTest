import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import {Table} from 'reactstrap';

const PostItemHeader = () => {

    return (
        <Table
      bordered
      hover
      >
        <thead>
          <tr>
            <th>
                <span>Category </span>
            </th>
            <th>
                Name
            </th>
            <th>
                <span>Price </span>
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