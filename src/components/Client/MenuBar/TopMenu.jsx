import './TopMenu.scss'
import {NavLink,Link} from 'react-router-dom'

export const TopMenu = () => {
    return (
        <>
            <nav className='homnav'>
                <ul class="nav justify-content-center">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Sobre Nosotros</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Servicios</a>
                    </li>
                    <li class="nav-item">
                        {/* <a class="nav-link " > <Link className='nav-link' to='/admin'>Iniciar sesión</Link></a> */}
                        <Link className='nav-link' to='/admin'>Iniciar sesión</Link>
                    </li>
                    <li className='nav-item'>
                        

                    </li>
                </ul>
            </nav>

        </>
    )

}