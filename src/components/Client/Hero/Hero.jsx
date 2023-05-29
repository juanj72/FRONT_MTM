import React from 'react';
import './Hero.scss';


const Hero = () => {
  return (
    <>
    <div className='cont'>
      <div className='hero'>
          <p className='pag'>Página 1.</p>
          <h1 className='titulo'>LOS SUEÑOS SON PARA ESCRIBIR HISTORIA</h1>
          <h2 className='cursiva'>
            Juntos podemos construir un mundo donde el cancer no signifique mas vivir con miedo o sin esperanza.
            <br />- Patrick Swayze
          </h2>
        </div>
    </div>
    </>
  );
};

export default Hero;
