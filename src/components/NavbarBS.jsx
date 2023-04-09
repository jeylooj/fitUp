import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/logo.svg';
import '../components/navbar.css';

import About from './About';
function NavbarBS() {
  return (
    <>
      <Navbar collapseOnSelect expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <img src={logo} alt=""/>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="text-center m-auto justify-content-around w-75 p-2">
            <Nav.Link href="/" className='text-light btn-hover'>Plans</Nav.Link>
            <Nav.Link href="/" className='text-light'>MyBMI</Nav.Link>
            <Nav.Link href="/" className='text-light'>Gallery</Nav.Link>
            <Nav.Link href="/blog" className='text-light'>Blog</Nav.Link>
            <Nav.Link href="/about" className='text-light'>About us</Nav.Link>
            <Nav.Link href="/contact" className='text-light'>Contact</Nav.Link>
          </Nav>
          </Navbar.Collapse>
          <Button className='d-none d-lg-block bg-dark text-light btn border-light '>Become a member</Button>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarBS;