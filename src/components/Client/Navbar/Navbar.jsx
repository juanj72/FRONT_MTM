import React from 'react';
import './Navbar.scss';

const Header = () => {
  return (
    <div className='header'>
        <div className='navbar'>
            <a className='btn' id='nav1'>Inicio</a>
            <a className='btn'id='nav2'>Pacientes</a>
            <a className='btn'id='nav3'>Padrinos</a>
        </div>
        <button className='btn2'>
            <a className='btntext'>Ingresar</a>
        </button>
    </div>
  );
}

export default Header;
