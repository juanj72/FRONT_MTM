import React from 'react';
import './Navbar.scss';

const Navbar = () => {
  return (
    <header>
      <nav className='navbar'>
        <div className='navbar-left'>
          <a className='nav-link' id='nav1'>Fundación mujeres trabajando por el Meta</a>
        </div>
      </nav>
      <button className='login-button'>
        <a href='/admin' className='login-link'>Ingresar</a>
      </button>
    </header>
  );
}

export default Navbar;
