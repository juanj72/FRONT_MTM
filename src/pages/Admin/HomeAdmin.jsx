import {useAuth} from '../../hooks'
import { Button } from 'semantic-ui-react';
import './HomeAdmin.scss'


export const HomeAdmin = () => {
  const {logout} = useAuth();

  return (
    <>
        <div className='HomeAdmin'>
         <img src="https://i0.wp.com/www.fundacionmtm.com/wp-content/uploads/2020/09/frente-hogar-de-paso-1-01.png?w=1418&ssl=1" className='panelimg' alt="" />
        </div>
    
    </>
    
  )
}
