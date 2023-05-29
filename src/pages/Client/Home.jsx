import './Home.scss'
import * as MDcons from 'react-icons/md';
import * as Ricons from 'react-icons/ri';

export const Home = () => {
  return (
    <>


      <header class="content header">
        <h2 class="title">Inicio</h2>
        <p className='pinit'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Ipsam necessitatibus odio quisquam reprehenderit quas,
          obcaecati, harum hic molestiae sequi ipsa nihil id tempore explicabo
          libero vero quia asperiores similique dicta.
        </p>

        <div class="btn-home">
          <a href="#" class="btnh">Saber mas</a>
          <a href="#" class="btnh">Saber mas</a>
        </div>
      </header>

      <section class="content sau">

        <h2 class="title">Productos</h2>
        <p className='pinit'>Lorem ipsum, dolor sit amet consectetur adipisicing
          elit. Veritatis excepturi dolore, harum asperiores
          cupiditate officiis quia odit reiciendis quidem iure
          architecto laudantium
          nihil saepe pariatur vel labore molestias consectetur veniam?</p>

        <div class="box-container">

          <div class="box">
          <Ricons.RiPsychotherapyFill className='icon'/>
            <h3>Salud mental</h3>
            <p>Fortalecimiento emocional</p>
          </div>
          <div class="box">
          <MDcons.MdHealthAndSafety className='icon'/>
            <h3>Salud</h3>
         
            <p>Acompañamiento riguroso </p>
          </div>
          <div class="box">
          <MDcons.MdOutlineFamilyRestroom className='icon'/>
            <h3>Familia</h3>
            <p>Acompañamiento familiar</p>
          </div>

        </div>

      </section>
      <hr />

      <section class="content about">

        <h2 class="title">Nosotros</h2>
        <p className='pinit'>Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Ut soluta similique
          quia reprehenderit eligendi aliquam. Sit
          odio impedit quibusdam. Velit corporis,
          optio debitis quidem ex ipsam rerum dolorem autem sequi.
        </p>

        <a href="#" class="btnh">Saber mas</a>

      </section>

      <section class="content price">

        <article class="contain">
          <h2 class="title">Precio</h2>
          <p>Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Ut soluta similique
            quia reprehenderit eligendi aliquam. Sit
            odio impedit quibusdam. Velit corporis,
            optio debitis quidem ex ipsam rerum dolorem autem sequi.
          </p>

          <a href="#" class="btnh">Saber precio</a>

        </article>

      </section>

      <section class="content contact">
        <h2 class="title">Contacto</h2>
        <p>48481548</p>
        <figure class="map">
          <img src="" />
        </figure>
      </section>


    </>
  )
}
