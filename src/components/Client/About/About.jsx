import React from 'react';
import './About.scss';

const About = () => {
  return (
    <>
      <img
        className='imagen-about'
        src='../src/img/florbg.png'
        alt='Descripción de la imagen'
      />
      <div className='about-container'>
        <div className='about'>
          <div className='title'>
            <h2>ABOUT</h2>
          </div>
          <div className='content'>
            <p id='bold'>Somos una fundación sin ánimo de lucro que durante tres años se ha dedicado a apoyar a los niños, niñas y adolescentes con cáncer junto con sus familias en el diagnóstico y cuidado de la enfermedad, brindándoles una esperanza.<br /> <br /></p>
            <p>Para la fundación, más allá de la cura de la enfermedad, el proceso de apoyo debe dirigir al paciente a la resignación de la vida y del cáncer. Por eso, los diferentes programas que se ejecutan implican una mirada integral y un enfoque de desarrollo que va más allá de las razones netamente asistenciales. Estas razones son importantes en la primera etapa de la sección, pero no generan cambios ni empoderamiento ni en la familia ni en el paciente.</p>
            <p>Como fundación, apostamos a que nuestros niños, niñas y adolescentes reciban de parte del Estado y a través de las instituciones prestadoras de servicios de salud los mejores tratamientos y la atención integral que necesitan. También sumamos la gran ayuda de servicios de salud como enfermería, fonoaudiología, psicología, nutrición, entre otros.</p>
          </div>
        </div>
      </div>
    </>
    
  );
}

export default About;
