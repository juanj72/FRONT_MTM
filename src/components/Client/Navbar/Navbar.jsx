import React from 'react';
import './Navbar.scss';

const Header = () => {
  return (
    <div className='header'>
        <div className='navbar'>
            <a href='/' className='btn' id='nav1'>Inicio</a>
            <a href='/pacientes' className='btn'id='nav2'>Pacientes</a>
            <a href='/padrinos' className='btn'id='nav3'>Padrinos</a>
        </div>
        <button className='btn2'>
            <a href='/admin' className='btntext'>Ingresar</a>
        </button>
    </div>
  );
}

export default Header;
