import './SideBar.scss';
import { NavLink, Link } from 'react-router-dom';
import { FaHome, FaChild } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';
import { BsFillMoonFill } from 'react-icons/bs';
import { MdOutlineFamilyRestroom, MdFoundation } from 'react-icons/md';

export const BarraLateral = () => {
  return (
    <header>
      <div className="sidebar">
        <div className="sidebar-header">
          <h2>
            <MdFoundation />MTM
          </h2>
        </div>
        <nav className="sidebar-nav">
          <ul>
            <li>
              <Link to="/admin">
                <FaHome /> Inicio
              </Link>
            </li>
            <li>
              <Link to="/admin/paciente">
                <FaChild /> Pacientes
              </Link>
            </li>
            <li>
              <Link to="/admin/padrinos">
                <FiUsers /> Padrinos
              </Link>
            </li>
            <li>
              <Link to="/admin/sueños">
                <BsFillMoonFill /> Sueños
              </Link>
            </li>
            <li>
              <Link to="/admin/familiares">
                <MdOutlineFamilyRestroom /> Familiares
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
