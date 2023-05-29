import React from 'react';
import './Navbar.scss';

const Navbar = () => {
  return (
    <header>
      <nav className='navbar'>
        <div className='navbar-left'>
          <a href='/' className='nav-link' id='nav1'>Inicio</a>
          <a href='/pacientes' className='nav-link' id='nav2'>Pacientes</a>
          <a href='/padrinos' className='nav-link' id='nav3'>Padrinos</a>
        </div>
      </nav>
      <button className='login-button'>
        <a href='/admin' className='login-link'>Ingresar</a>
      </button>
    </header>
  );
}

export default Navbar;
