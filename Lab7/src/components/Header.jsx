import { useState } from 'react';
import { Navbar, Nav, Container, Button} from 'react-bootstrap';
import DarkMode from './DarkMode';
export default function Header() {

  const scrollToSection = (id) => {
    let element = document.getElementById(id);
    if(element){
    window.scrollTo({
        top: element.offsetTop - 100, 
        behavior: 'smooth',
    })
    }
  }
  
  return (
    <Navbar bg='dark' variant='dark' expand='lg' fixed='top' >
      <Container>
        <Navbar.Brand href='#home'>Prabhath Sundarapalli</Navbar.Brand>
          <Nav className='ms-auto'>
          <Nav.Link onClick={()=>scrollToSection('home')}>Home</Nav.Link>
            <Nav.Link onClick={()=>scrollToSection('projects')}>Projects</Nav.Link>
            <Nav.Link onClick={()=>scrollToSection('about')}>About</Nav.Link>
            <Nav.Link onClick={()=>scrollToSection('skills')}>Skills</Nav.Link>
            <DarkMode  className='toggle'>🌙</DarkMode>
          </Nav>
      </Container>
    </Navbar>
  );
}