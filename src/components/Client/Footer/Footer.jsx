import React from 'react';
import './Footer.scss';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-left'>
        <a href='/' className='footer-link'>Inicio</a>
        <a href='/pacientes' className='footer-link'>Pacientes</a>
        <a href='/padrinos' className='footer-link'>Padrinos</a>
      </div>
      <button className='footer-button'>
        <a className='footer-link'>© 2023 Fundación MTM , Todos los derechos reservados</a>
      </button>
    </footer>
  );
}

export default Footer;
