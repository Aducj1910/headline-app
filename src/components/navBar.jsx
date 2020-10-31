import React, { Component } from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";

const NavBar = () => {
  return (
    <Navbar bg="danger" sticky="top" variant="dark" expand="lg">
      <LinkContainer to="/">
        <Navbar.Brand href="/">HeadlineMan</Navbar.Brand>
      </LinkContainer>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/">
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="/realnews">
            Real News
          </Nav.Link>
          <NavDropdown title="Specifics" id="basic-nav-dropdown">
            <NavDropdown.Item as={Link} to="/economy">
              Economy
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Banned In</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Loans</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Settings</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        {/* <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-success">Search</Button>
        </Form> */}
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
