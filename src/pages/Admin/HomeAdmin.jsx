import { useAuth } from '../../hooks';
import { Button } from 'semantic-ui-react';
import './HomeAdmin.scss';

export const HomeAdmin = () => {
  const { logout } = useAuth();

  return (
    <>
      <div className="HomeAdmin">
        <img src="../../../src/img/logo.jpg" className="panelimg" alt="" />
      </div>

      <div className="datos">
        <p>
          Somos una fundación sin ánimo de lucro que durante tres años se ha dedicado a apoyar a los niños, niñas y adolescentes con cáncer junto con sus familias en el diagnóstico y cuidado de la enfermedad, brindándoles una esperanza.
          <br /><br />
          Para la fundación, más allá de la cura de la enfermedad, el proceso de apoyo debe dirigir al paciente a la resignación de la vida y del cáncer. De allí que los diferentes programas que se ejecutan implican una mirada integral y de proceso desde un enfoque de desarrollo, superando las razones netamente asistenciales que, aunque importantes en la primera etapa de la sección, no generan cambios ni empoderamiento ni en la familia ni en el paciente.
          <br /><br />
          Como fundación, apostamos a que nuestros niños, niñas y adolescentes reciban por parte del estado y a través de las instituciones prestadoras de servicios de salud, los mejores tratamientos y la atención integral que se necesitan. Sumando así la gran ayuda de los servicios de salud como enfermería, fonoaudiología, psicología, nutrición, entre otros.
        </p>
      </div>
    </>
  );
};
