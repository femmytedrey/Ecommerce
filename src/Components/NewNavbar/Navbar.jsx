import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';
import logo from '../Assets/logo.png';
import { BiCart } from 'react-icons/bi';
// import cart_icon from '../Assets/cart_icon.png';

function Navbar1() {
  const location = useLocation();
  const [ menu, setMenu ] = useState("shop");

  const handleMenuClick = (menu) => {
    setMenu(menu);
  };

  return (
    <nav className="navbar navbar-expand-lg fixed-top">
      <div className="container-fluid">
        <Link className="navbar-brand me-auto" to="/">
            <img src={logo} alt='logo' className='brand-logo img-fluid' />
        </Link>
        
        <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasNavbarLabel"><img src={logo} alt='logo' className='brand-logo img-fluid w-75'/></h5>
            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-center flex-grow-1 pe-3">
              <li onClick={() => handleMenuClick('shop')} className="nav-item">
                <Link to='/' className={`nav-link mx-lg-2 ${location.pathname === '/' ? 'active' : ''}`}>Shop</Link>
              </li>
              <li onClick={() => handleMenuClick('men')} className="nav-item">
                <Link to='/men' className={`nav-link mx-lg-2 ${location.pathname==='/men'? 'active' : ''}`}>Men</Link>
              </li>
              <li onClick={() => handleMenuClick('women')} className="nav-item">
                <Link to='/women' className={`nav-link mx-lg-2 ${location.pathname==='/women'? 'active' : ''}`}>Women</Link>
              </li>
              <li onClick={() => handleMenuClick('kids')} className="nav-item">
                <Link to='/kids' className={`nav-link mx-lg-2 ${location.pathname==='/kids'? 'active' : ''}`}>Kids</Link>
              </li>
            </ul>
            <Link to='/login' className='login-button'>Login</Link>
          </div>
        </div>
        <div className='nav-container'>
          <Link to='/cart'><BiCart className='mx-2 cartIcon' /></Link>
          <div className='cart-count'>0</div>
        </div>
        <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>
    </nav>
  );
}

export default Navbar1;
