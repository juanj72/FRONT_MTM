import React from 'react';
import './Hero.scss';
import { Canvas } from '@react-three/fiber';
import { Flor } from '../Flor/Flor';




const Hero = () => {
  return (
    <>
      <div className='hero'>
        <p className='pag'>Página 1.</p>
        <h1 className='titulo'>LOS SUEÑOS SON PARA ESCRIBIR HISTORIA</h1>
        <h2 className='cursiva'>
          Juntos podemos construir un mundo donde el cancer no signifique mas vivir con miedo o sin esperanza.
          <br />- Patrick Swayze
        </h2>
      </div>
      <div className='content'>
        <Canvas camera={{ position: [8, 5, 5] }}>
            <ambientLight />
            <pointLight position={[10, 10, 10]} />
            <Flor scale={23}/>
        </Canvas>
      </div>
      
    </>
  );
};

export default Hero;
