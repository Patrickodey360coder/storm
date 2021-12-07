import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import logo from '../../images/logo.png'

function BlogNav() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light" className="navbar sticky-top">
      <Container>
        <Navbar.Brand href="/" className="orange"><img src={logo} alt={logo} className="img-fluid logo" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Item>
              <Nav.Link eventKey="1" href="#hero">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="2" href="#services">News</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="3" href="#about">Opportunities</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="4" href="#team">Events</Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar> 
  )
}

export default BlogNav
