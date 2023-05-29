import './LoginAdmin.scss';
import {LoginForm} from '../../../components/Admin'
import imagen from '../../../assets/mtm_logo.jpg'


export const LoginAdmin = () => {
  return (
    <>
        <div className='login-admin'>
          <div className='login-admin__content'>
           
            <img src={imagen} alt="" />
            <h1>Iniciar sesión</h1>
            <LoginForm/>
          </div>
        </div>
    </>
  )
}
