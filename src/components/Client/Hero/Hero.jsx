import React from 'react';
import './Hero.scss';

const Hero = () => {
  return (
    <>
      <img
        className='imagen-hero'
        src='../src/img/index.png'
        alt='Descripción de la imagen'
      />
      <div className='hero'>
      <div className='cont'>
        <p className='pag'>Página 1.</p>
        <h1 className='titulo'>LOS SUEÑOS SON PARA <br />ESCRIBIR HISTORIA</h1>
        <h2 className='cursiva'>
          Juntos podemos construir un mundo donde el cancer<br /> no signifique vivir con miedo o sin esperanza.
          <br />- Patrick Swayze
        </h2>
      </div>
    </div>
    </>
    
  );
};

export default Hero;
