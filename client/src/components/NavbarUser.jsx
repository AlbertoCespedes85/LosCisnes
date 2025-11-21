import React from 'react'
import { Container, Nav, Navbar} from 'react-bootstrap';
import { Link } from 'react-router';

export const NavbarUser = () => {
  return (
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home"><img src="../images/logo.png" alt=""
          width={50} /></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to={"/"}>Home</Nav.Link>
            <Nav.Link as={Link} to={"/about"}>About</Nav.Link>
            <Nav.Link as={Link} to={"/reservation"}>Reservar</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
  )
}
