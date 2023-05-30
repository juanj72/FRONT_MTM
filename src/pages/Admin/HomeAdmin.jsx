import { useAuth } from '../../hooks'
import { Button } from 'semantic-ui-react';
import './HomeAdmin.scss'


export const HomeAdmin = () => {
  const { logout } = useAuth();

  return (
    <>
      <div className='HomeAdmin'>
        <img src="https://i0.wp.com/www.fundacionmtm.com/wp-content/uploads/2020/09/frente-hogar-de-paso-1-01.png?w=1418&ssl=1" className='panelimg' alt="" />

      </div>

      <div className='datos'>
        <h2>Fundación Mujeres trabajando por el Meta</h2>

        <p>Somos una fundación sin ánimo de lucro que durante tres años se ha dedicado a apoyar a los niños, niñas y adolescentes con  cáncer junto con sus familias en el diagnóstico y cuidado de la enfermedad, brindándoles una esperanza.

          Para la fundación más allá de la cura de la enfermedad, el proceso de apoyo debe dirigir al paciente a la resignación de la vida y del cáncer. De allí  que los diferentes  programas  que  se ejecutan  implican  una mirada integral  y  de  proceso  desde  un  enfoque  de  desarrollo  superando  las razones netamente asistenciales que, aunque importantes en la primera etapa de la sección no genera cambios ni apoderamiento ni en la familia ni en el paciente.

          Como fundacion; le apostamos a que nuestros niños, niñas y adolescentes reciban de parte del estado y a través de las instituciones prestadoras de servicios de salud obtengan los mejores tratamientos y la atención integral que se necesitan. Sumando así la gran ayuda los servicios de salud como enfermería, fonoaudiología, psicología, nutrición, entre otros.</p>
      </div>




    </>

  )
}
