import React, { useState, useEffect } from 'react';
import {NavLink} from 'react-router-dom'
import '../estilos/Barra.css';
import * as FaIcons from 'react-icons/fa';
import * as FIcons from 'react-icons/fi';
import * as MDcons from 'react-icons/md';
import * as BScons from 'react-icons/bs';


function NavBar() {

  // Estado para guardar los datos de la API
  const [data, setData] = useState([]);

  // Hook useEffect para ejecutar la llamada a la API
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://127.0.0.1:8000/api/padrino/');
      const jsonData = await response.json();
      setData(jsonData);
    };
    fetchData();
  }, []);





  return (
    <>


      <header>
        <div className="sidebar">
          <div className="sidebar-header">
            <h3> <MDcons.MdFoundation/> MTM</h3>
          </div>
          <nav className="sidebar-nav">
            <ul>
              <li>
             
                <NavLink to="/"> <FaIcons.FaHome/> inicio</NavLink> 
              
              </li>
              <li>
               
                <NavLink to="/Paciente"> <FaIcons.FaChild/>  Pacientes</NavLink> 
                
              </li>
              <li>
                
                <NavLink to="/Padrino"><FIcons.FiUsers/> Padrinos</NavLink> 
                
              </li>
              <li>
              <NavLink to="/Dream"><BScons.BsFillMoonFill/> Sueños</NavLink> 
              </li>
              <li>

              </li>

            </ul>
          </nav>
        </div>

      </header>

   
       

       





      





    </>
  );
}

export default NavBar;