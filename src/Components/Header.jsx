import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
const Header = () => {
    return (
        <>
               <Navbar expand="lg" className="bg-neutral-200 rounded-pill mx-3 my-3">
      <>
        <Navbar.Brand className='headerrhead mx-5  text-green-600' href="#home">#Jishaaan</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
       <Container>
            <Navbar.Collapse id="basic-navbar-nav ">
              <Nav   className="ms-auto  mx-5">
                <Nav.Link className='mx-3 text-green-600' href="#home">Home</Nav.Link>
                <Nav.Link className='mx-3 text-green-600' href="#skills">Skills</Nav.Link>

                <Nav.Link className='mx-3 text-green-600' href="#projects">Projects</Nav.Link>
                <Nav.Link  className='mx-3 text-green-600' href="#about">About Me</Nav.Link>
                <Nav.Link className='mx-3 text-green-600' href="#contact">Contact</Nav.Link>
          
              </Nav>
            </Navbar.Collapse>
       </Container>
      </>
    </Navbar>
        </>
    )
}

export default Header