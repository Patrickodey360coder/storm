import React from 'react'
import { Nav, Navbar} from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import logo from '../../images/logo.svg'


function Navs() {
  return (
       <Navbar collapseOnSelect expand="lg" bg="light" variant="light" className="navbar sticky-top">
        <Container>
        <Navbar.Brand href="/" className="orange"><img src={logo} alt={logo} className="img-fluid logo" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Item>
              <Nav.Link eventKey="1" href="/">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="2" href="#services">Services</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="3" href="#about">About</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="4" href="#team">Team</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="5" href="#contact">Contact</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="6" href="/blog">Blog</Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar> 
  )
}

export default Navs;
