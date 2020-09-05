import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function Navivation() {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">Strain Search</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/brands">Brands</Nav.Link>
            <Nav.Link href="/strains">Strains</Nav.Link>
            <NavDropdown title="Products">
              <NavDropdown.Item href="/products/flowers">Flowers</NavDropdown.Item>
              <NavDropdown.Item href="/products/extracts">Extracts</NavDropdown.Item>
              <NavDropdown.Item href="/products/edibles">Edibles</NavDropdown.Item>
              <NavDropdown.Item href="/products/seeds">Seeds</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/studies">Studies</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}