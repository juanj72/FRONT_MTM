import './AdminLayout.scss';
import {LoginAdmin} from '../../pages';
import {useAuth} from '../../hooks'
import {TopMenu,BarraLateral} from '../../components/Admin'



export const AdminLayout = (props) => {
    const {children} = props;
    const {auth} = useAuth();

    // const auth = null;

    if (!auth) return <LoginAdmin/>

    return (
        <>
        <div className='admin-layout'>
            <div className='admin-layout__menu'>
            <TopMenu/>
            <BarraLateral/>
            
           
          
            </div>
            <div className='admin-layout__main-content'>
                
            {children}
            </div>
        
       

        </div>
           
        </>    
    );
}
