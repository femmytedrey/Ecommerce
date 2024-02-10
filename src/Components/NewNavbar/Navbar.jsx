import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
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
    <nav className="navbar navbar-expand-lg fixed-top">
      <div className="container-fluid">
        <a className="navbar-brand me-auto" href="#"><img src={logo} alt='logo' className='brand-logo'/></a>
        
        <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasNavbarLabel"><img src={logo} alt='logo' className='brand-logo'/></h5>
            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-center flex-grow-1 pe-3">
              <li className="nav-item">
                <a className="nav-link active mx-lg-2" aria-current="page" href="#">Shop</a>
              </li>
              <li className="nav-item">
                <a className="nav-link mx-lg-2" href="#">Men</a>
              </li>
              <li className="nav-item">
                <a className="nav-link mx-lg-2" href="#">Women</a>
              </li>
              <li className="nav-item">
                <a className="nav-link mx-lg-2" href="#">Kids</a>
              </li>
              
            </ul>
            
          </div>
        </div>
        <a href='#' className='login-button'>Login</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>
    </nav>
  );
}

export default Navbar1;
