import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import {Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, NavbarText } from 'reactstrap'; 



function App() {
  return (
    <div>
  <Navbar
    color="light"
    expand="md"
    light
  >
    <NavbarBrand href="/">
      React App
    </NavbarBrand>
    <NavbarToggler onClick={function noRefCheck(){}} />
    <Collapse navbar>
      <Nav
        className="me-auto"
        navbar
      >
        <NavItem>
          <NavLink href="/listall">
            List of all products
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/addedlist">
            List of added products
          </NavLink>
        </NavItem>
      </Nav>
    </Collapse>
  </Navbar>
</div>
  )
}

export default App;

