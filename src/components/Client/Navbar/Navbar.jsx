import React from 'react';
import './Navbar.scss';
import { NavLink, Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className='headna'>
      <nav className='navbar'>
        <div className='navbar-left'>
          <a className='nav-link' id='nav1'>Fundación mujeres trabajando por el Meta</a>
        </div>
      </nav>
      <button className='login-button'>
        {/* <a href='/admin' className='login-link'>Ingresar</a> */}
        <Link to='/admin' className='login-link' >Ingresar</Link>
      </button>
    </header>
  );
}

export default Navbar;
