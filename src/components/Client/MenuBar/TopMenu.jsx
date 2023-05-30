import './TopMenu.scss'
import {NavLink,Link} from 'react-router-dom'
import * as Ricons from 'react-icons/ri';

export const TopMenu = () => {
    return (
        <>
            <nav className='homnav'>
                <ul class="nav justify-content-left homnav">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#"><Ricons.RiHome7Fill/> Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#nosotros"><Ricons.RiQuestionnaireFill/> Sobre Nosotros</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#servicios"><Ricons.RiMentalHealthFill/> Servicios</a>
                    </li>
                    <li className='nav-item'>
                    <a class="nav-link" href="#contacto"> <b><Ricons.RiCustomerService2Fill/></b> Contacto</a>

                    </li>
                    <li class="nav-item">
                        {/* <a class="nav-link " > <Link className='nav-link' to='/admin'>Iniciar sesión</Link></a> */}
                        <Link className='nav-link' to='/admin'>Iniciar sesión</Link>
                    </li>
                  
                </ul>
            </nav>

        </>
    )

}