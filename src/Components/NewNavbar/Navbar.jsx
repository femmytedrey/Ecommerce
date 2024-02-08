import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';
import logo from '../Assets/logo.png';
import cart_icon from '../Assets/cart_icon.png';

function Navbar1() {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand as={Link} to="/" eventKey="/" className='brand-logo-box'>
          <img src={logo} alt='logo' className="brand-logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <div className='d-flex justify-content-center align-items-center flex-grow-1'>
            <Nav className="d-flex">
              <Nav.Item className={`mx-3 ${isActive('/')}`}>
                <Link to="/" className="nav-link">
                  Shop
                </Link>
              </Nav.Item>
              <Nav.Item className={`mx-3 ${isActive('/men')}`}>
                <Link to="/men" className="nav-link">
                  Men
                </Link>
              </Nav.Item>
              <Nav.Item className={`mx-3 ${isActive('/women')}`}>
                <Link to="/women" className="nav-link">
                    Women 
                </Link>
              </Nav.Item>
              <Nav.Item className={`mx-3 ${isActive('/kids')}`}>
                <Link to="/kids" className="nav-link">
                  Kids
                </Link>
              </Nav.Item>
            </Nav>
          </div>
          <div className="ms-auto right-item">
            <Link to='/login'>
                <button className='login-btn'>Login</button>
            </Link>
            {/* <button className='login-btn'>Sign up</button> */}
            {/* <Button className='btn'>Sign Up</Button> */}
            <div className='cart-icon-container'>
              <Link to="/cart"><img src={cart_icon} alt="cart"/></Link>
              <div className='nav-cart-count'>0</div>
            </div>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbar1;
