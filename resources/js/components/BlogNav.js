import React from 'react'
import { Navbar, Container, Nav, Form, FormControl, Button } from 'react-bootstrap'
import logo from '../../images/logo.svg'

function BlogNav() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light" className="navbar sticky-top blognav">
     <Container>
     <Navbar.Brand href="/" className="orange"><img src={logo} alt={logo} className="img-fluid logo" /></Navbar.Brand>
     <Navbar.Toggle aria-controls="responsive-navbar-nav" ><i class="fas fa-bars fa-lg"></i></Navbar.Toggle>
     <Navbar.Collapse id="responsive-navbar-nav">
       <Nav className="m-auto">
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
       <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        {/* <Button variant="outline-success">Search</Button> */}
      </Form>
     </Navbar.Collapse>
     </Container>
   </Navbar> 
)
}

export default BlogNav
