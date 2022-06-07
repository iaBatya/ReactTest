import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import {Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, NavLink, NavbarText } from 'reactstrap';

const PostItemHeader = () => {

    return (
      <Navbar
      color="light"
      expand="md"
      light
    >
      <NavbarBrand href="/listall">
        Category
      </NavbarBrand>
      <NavbarToggler onClick={function noRefCheck(){}} />
      <Collapse navbar>
        <Nav
          className="me-auto"
          navbar
        >
          <NavItem>
            <NavLink href="/listall">
              Name
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/listall">
              Price
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/listall">
              Actions
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/">
              Main
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/addedlist">
              Added
            </NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
    );
};

export default PostItemHeader;

// category name price actions