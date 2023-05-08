
import './App.css'
import NavBar from './componentes/Barra'
import TablaPadrinos from './componentes/Padrinos'
import TablaPacientes from './componentes/Pacientes'
import Inicio from './componentes/Inicio'
import Dreams from './componentes/Dreams'
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom'

function App() {


  return (
    <>
    
   

    <Router>
      
      <div className='contenedor'>
        <NavBar/>
        <h1>MTM APP</h1>
        <div className='main'>
      
          <Routes>
              <Route path="/" exact element={< Inicio/>}  />
            <Route path="/Padrino" exact element={< TablaPadrinos/>} />
            <Route path="/Paciente" exact element={< TablaPacientes/>} />
            <Route path="/Dream" exact element={< Dreams/>} />
            
          </Routes>


        </div>


      </div>


    </Router>


    </>
    
  )
}

export default App
