import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import logo from '../../images/logo.svg'

function BlogNav() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light" className="navbar sticky-top">
     <Container>
     <Navbar.Brand href="/" className="orange"><img src={logo} alt={logo} className="img-fluid logo" /></Navbar.Brand>
     <Navbar.Toggle aria-controls="responsive-navbar-nav" ><i class="fas fa-bars fa-lg"></i></Navbar.Toggle>
     <Navbar.Collapse id="responsive-navbar-nav">
       <Nav className="ms-auto">
         <Nav.Item>
           <Nav.Link eventKey="1" href="/">Home</Nav.Link>
         </Nav.Item>
         <Nav.Item>
           <Nav.Link eventKey="2" href="#services">Newsletter</Nav.Link>
         </Nav.Item>
         <Nav.Item>
           <Nav.Link eventKey="3" href="#about">Writer's Guide</Nav.Link>
         </Nav.Item>
       </Nav>
     </Navbar.Collapse>
     </Container>
   </Navbar> 
)
}

export default BlogNav
