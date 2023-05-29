import './TopMenu.scss';
import {useAuth} from '../../../hooks'
import {NavLink,Link} from 'react-router-dom'
import {Icon,Menu} from 'semantic-ui-react'
import * as Fccons from 'react-icons/fc';
export const TopMenu=()=>{
    const {auth,logout} =useAuth();
    const renderName=()=>{
        if(auth.me?.first_name && auth.me?.last_name){
            return `${auth.me.first_name} ${auth.me.last_name}`
        }else{
            return auth.me?.email
        }
    }

    const renderDatos =()=>{
        return `${auth.me.is_staff}`
    }
    return(
        <>
       <Menu fixed='top' className='top-menu-admin'>
        <Menu.Item className='top-menu-admin__logo'>
            <img src="https://i0.wp.com/www.fundacionmtm.com/wp-content/uploads/2020/09/cropped-logocorazon.png?fit=32%2C32&ssl=1" className='logo' alt="" />               
        </Menu.Item>
        <Menu.Menu position='right'>
        <Menu.Item>Hola, {renderName()} </Menu.Item>
        <Menu.Item onClick={logout} >
            <Icon name='sign-out'  ></Icon>
        </Menu.Item>
        <Menu.Item  >
            
            <Link to='/'> <Fccons.FcHome/></Link>
        </Menu.Item>
        </Menu.Menu>
        
       </Menu>

        </>
    )
}