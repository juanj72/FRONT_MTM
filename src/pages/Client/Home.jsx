import './Home.scss'
import * as MDcons from 'react-icons/md';
import * as Ricons from 'react-icons/ri';

export const Home = () => {
  return (
    <>


      <header class="content header">
        <h2 class="title"><b className='m'>Mujeres</b> <b className='t'>Trabajando</b> por el <b className='me'>meta</b></h2>


        <div class="btn-home">
          <a href="#" class="btnh">Saber mas</a>
          <a href="#" class="btnh">Saber mas</a>
        </div>
      </header>

      <section class="content sau" id='servicios'>

        <h2 class="title">Servicios</h2>
        <p className='pinit'>Actualmente tenemos capacidad para 30 personas con posibilidad de ampliación,  durante el tiempo que se requiera según autorización médica.

          La única restricción para el ingreso del paciente es que su diagnóstico sea relacionado con al grupo viral, debido a que nuestra gran población son pacientes con cáncer.</p>

        <div class="box-container">

          <div class="box">
            <Ricons.RiPsychotherapyFill className='icon' />
            <h3>Salud mental</h3>
            <p>Fortalecimiento emocional</p>
          </div>
          <div class="box">
            <MDcons.MdHealthAndSafety className='icon' />
            <h3>Salud</h3>

            <p>Acompañamiento riguroso </p>
          </div>
          <div class="box">
            <MDcons.MdOutlineFamilyRestroom className='icon' />
            <h3>Familia</h3>
            <p>Acompañamiento familiar</p>
          </div>

        </div>

      </section>
      <hr />

      <section class="content about" id='nosotros'>

        <h2 class="title">Nosotros</h2>
        <p className='pinit'>La Fundación sin ánimo de lucro apoya a niños, niñas y adolescentes con cáncer y sus familias. Más allá de la cura, se enfoca en su aceptación y empoderamiento. Los programas integrales van más allá de la asistencia inicial, promoviendo cambios. Trabajan con el estado y las instituciones de salud para garantizar los mejores tratamientos y atención. Colaboran con servicios de enfermería, fonoaudiología, psicología y nutrición, entre otros, para brindar un apoyo completo.
        </p>

        <a href="#" class="btnh">Saber mas</a>

      </section>

      <section class="content price">

        <article class="contain">
          <h2 class="mision">Misión</h2>
          <p className='pmis'>Mejorar la calidad de vida de los niños, niñas y adolescentes diagnosticados con cáncer de escasos recursos, brindándoles apoyo psicosocial, hospedaje, medicamentos, alimentación, educación y recreación durante su tratamiento, con el fin de aumentar sus esperanzas de vida minimizando el impacto emocional y económico de la enfermedad en su familia.
          </p>

          <a href="#" class="btnh">Saber precio</a>

        </article>

      </section>

      <section class="content contact" id='contacto'>
        <h2 class="title">Contacto</h2>
        <div className='formulario' >
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">Email</label>
          <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
        </div>
        <div class="mb-3">
          <label for="exampleFormControlTextarea1" class="form-label">Mensaje</label>
          <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>

        </div>

        

      </section>


    </>
  )
}
