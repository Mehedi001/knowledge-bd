import React from 'react';
import './Header.css'
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {
    return (
        <div className='border-bottom'>
            <Navbar className='mb-3' expand="lg">
      <Container fluid>
        <Navbar.Brand className='fw-bold fs-2' href="#">Knowledge BD</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            
          </Nav>
          <Form className="d-flex">
            <a href=""><img style={{height:'70px',width:'70px', borderRadius:'50px'}} src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXw3NjA4Mjc3NHx8ZW58MHx8fHw%3D&w=1000&q=80" alt="" /></a>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </div>
    );
};

export default Header;