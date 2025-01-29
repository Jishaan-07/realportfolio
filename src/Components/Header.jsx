import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import hack from '../assets/hacking.png';
 
const Header = () => {
  return (
    <>
      <Navbar expand="lg" className="  rounded-full mx-3 my-3 sticky top-0 z-10">
      <Navbar.Brand className='d-flex align-items-center mx-5 text-white' href="#home">
  <img width={'40px'} src={hack} alt="" />
  <span className='ms-2'>JISHAAN</span>
</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Container>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto mx-5">
              <Nav.Link className='mx-3 text-white' href="#home"><span style={{color:'#00FF00 '}}>#</span>Home</Nav.Link>
              <Nav.Link className='mx-3 text-white ' href="#skills"><span style={{color:'#00FF00 '}}>#</span>Skills</Nav.Link>
              <Nav.Link className='mx-3 text-white ' href="#projects"><span style={{color:'#00FF00 '}}>#</span>Projects</Nav.Link>
              <Nav.Link className='mx-3 text-white ' href="#aboutMe"><span style={{color:'#00FF00 '}}>#</span>About Me</Nav.Link>
              <Nav.Link className='mx-3 text-white' href="#contact"><span style={{color:'#00FF00 '}}>#</span>Contact</Nav.Link>

         

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
