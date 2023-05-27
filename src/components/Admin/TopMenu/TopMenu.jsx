import './TopMenu.scss';
import {useAuth} from '../../../hooks'

import {Icon,Menu} from 'semantic-ui-react'
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
            <p>Wallet UCC, {renderDatos()} </p>                
        </Menu.Item>
        <Menu.Menu position='right'>
        <Menu.Item>Hola, {renderName()} </Menu.Item>
        <Menu.Item onClick={logout} >
            <Icon name='sign-out'  ></Icon>
        </Menu.Item>
        </Menu.Menu>
        
       </Menu>

        </>
    )
}