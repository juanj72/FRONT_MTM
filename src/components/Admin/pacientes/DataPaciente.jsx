import React, { useState, useEffect } from 'react';
import {getToken} from '../../../api/token'
import * as BScons from 'react-icons/bs';
import * as Aicons from 'react-icons/ai';

import {DetailModal} from '../pacientes/popups'


export const DataPaciente = ()=>{

 

    const [data, setData] = useState([]);
    const [selectedPaciente, setSelectedPaciente] = useState(null);
    const TOKEN = getToken()
  
    const DetallePaciente=(paciente)=>{
      console.log(paciente)
      setSelectedPaciente(paciente);
      
      }

    useEffect(() => {
      const fetchData = async () => {
        const response = await fetch('http://127.0.0.1:8000/api/paciente/',{method:'GET',headers:{Authorization:`Bearer ${TOKEN}`}});
        const jsonData = await response.json();
        setData(jsonData);
      };
      fetchData();
    }, []);

    console.log(data)

    return(
        <>

      
<div className="modal fade" id="DetalleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">Detalle</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">

      <DetailModal paciente={selectedPaciente} />


      </div>
      
    </div>
  </div>
</div>


      
        
        <table className="table  table-hover">
            <thead>
              <tr>
                <th scope="col">id</th>
                <th scope="col">Nombre</th>
                <th scope="col">Apellido</th>
                <th scope="col">Numero unico</th>
                <th scope='col' >Fecha de inicio del tratamiento</th>
                <th scope='col' >Fecha de ingreso</th>
                <th scope='col' >Seguro funebre</th>
                <th scope='col' >Correo</th>
                <th scope='col' >Direccion</th>
                <th scope='col' >Telefono</th>
                <th scope='col' >Acción</th>
                
              </tr>
            </thead>
            <tbody>
              {data.map(item => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.nombre}</td>
                  <td>{item.apellido}</td>
                  <td>{item.nui}</td>
                  <td>{item.fecha_inicio_tratamiento}</td>
                  <td>{item.fecha_ingreso}</td>
                  <td>{item.seguro_funebre}</td>
                  <td>{item.correo}</td>
                  <td>{item.direccion_residencia}</td>
                  <td>{item.telefono}</td>
                  <td><button className='btn btn-success' ><BScons.BsFillPencilFill/></button>
                  <button className='btn btn-primary' data-bs-toggle="modal" data-bs-target="#DetalleModal" onClick={DetallePaciente.bind(null,item)} ><Aicons.AiFillEye/></button>
                  <button className='btn btn-danger' onClick={eliminarPaciente.bind(null,item.id)} ><BScons.BsFillTrashFill/></button>
                  </td>
                
                </tr>
              ))}

            </tbody>
          </table>
        

        </>
    )
}

const eliminarPaciente=async (id)=>{
  const TOKEN = getToken()

  const response = await fetch(`http://127.0.0.1:8000/api/paciente/${id}/`,{method:'DELETE',headers:{Authorization:`Bearer ${TOKEN}`}});
        // const jsonData = await response.json();
        // setData(jsonData);

}

