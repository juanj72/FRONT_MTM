import './ClientLayout.scss';
import {TopMenu} from '../../components/Client/MenuBar'

export const ClientLayout = (props) => {
    const {children} = props;
  return (
    <>
      <TopMenu/>
        {children}
    </>
    
  )
}
