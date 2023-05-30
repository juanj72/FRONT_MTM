import {DataPaciente} from '../../../components/Admin/pacientes'
import * as BScons from 'react-icons/bs';




export const pacientes=()=>{
  




    return(
        <>




        <h1>Pacientes</h1>
        <button className='btn btn-success' data-bs-toggle="modal" data-bs-target="#exampleModal" > <BScons.BsPersonFillAdd/> Agregar</button>
        <DataPaciente/>
        
       
        </>
    )
}