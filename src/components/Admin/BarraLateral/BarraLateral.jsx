import './SideBar.scss';
import * as FaIcons from 'react-icons/fa';
import * as FIcons from 'react-icons/fi';
import * as MDcons from 'react-icons/md';
import * as BScons from 'react-icons/bs';
import {NavLink,Link} from 'react-router-dom'


export const BarraLateral =()=>{

  return(
    <>
  <header>
        <div className="sidebar">
          <div className="sidebar-header">
            {/* <h3> <MDcons.MdFoundation/> MTM</h3> */}
            <h2><MDcons.MdFoundation/> MTM</h2>
          </div>
          <nav className="sidebar-nav">
            <ul>
              <li>
             
                <Link to="/admin"> <FaIcons.FaHome/> inicio</Link> 
              
               
              </li>
              <li>
               
                <Link to="/admin/paciente"> <FaIcons.FaChild/>  Pacientes</Link> 
                {/* <a href=""> <FaIcons.FaChild/> Paciente</a> */}
              </li>
              <li>
                
                <Link to="/admin/padrinos"><FIcons.FiUsers/> Padrinos</Link> 
                
                
              </li>
              <li>
              <Link to="/admin/sueños"><BScons.BsFillMoonFill/> Sueños</Link> 
               
              </li>
              <li>
              
                <Link to="/admin/familiares"><MDcons.MdOutlineFamilyRestroom/> Familiares</Link> 
              </li>

            </ul>
          </nav>
        </div>

      </header>
 
    </>
  )
    
}