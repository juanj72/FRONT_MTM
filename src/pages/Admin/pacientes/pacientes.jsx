import {DataPaciente} from '../../../components/Admin/pacientes'
import * as BScons from 'react-icons/bs';
import {AddPaciente} from '../../../components/Admin/pacientes'



export const pacientes=()=>{
    return(
        <>

<div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">Agregar paciente</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      
        <AddPaciente/>

      </div>
      
    </div>
  </div>
</div>


        <h1>Pacientes</h1>
        <button className='btn btn-success' data-bs-toggle="modal" data-bs-target="#exampleModal" > <BScons.BsPersonFillAdd/> Agregar</button>
        <DataPaciente/>
        
       
        </>
    )
}