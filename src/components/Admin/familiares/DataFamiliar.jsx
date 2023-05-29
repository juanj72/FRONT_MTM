import React, { useState, useEffect } from 'react';
import {getToken} from '../../../api/token'
import * as BScons from 'react-icons/bs';
import * as Aicons from 'react-icons/ai'
import {AddFamiliar} from './formularios'


export const DataFamiliar = ()=>{

    const [data, setData] = useState([]);
    const TOKEN = getToken()

    useEffect(() => {
    
      fetchData();
    }, []);

    const fetchData = async () => {
      const response = await fetch('http://127.0.0.1:8000/api/Familiar/',{method:'GET',headers:{Authorization:`Bearer ${TOKEN}`}});
      const jsonData = await response.json();
      setData(jsonData);
    };

    const actualizar=()=>{
      fetchData();
    }

    return (
        <>

<div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">Agregar familiar</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      
        <AddFamiliar props={actualizar} />

      </div>
      
    </div>
  </div>
</div>




<button className='btn btn-success' data-bs-toggle="modal" data-bs-target="#exampleModal" > <BScons.BsPersonFillAdd/> Agregar</button>
       <table className="table  table-hover">
            <thead>
              <tr>
                <th scope="col">id</th>
                <th scope="col">Nui</th>
                <th scope="col">Antedecedentes oncologicos</th>
                <th scope="col">Ocupación</th>
                <th scope='col' >Nombre</th>
                <th scope='col' >Apellido</th>
                <th scope='col' >Telefono</th>
                <th>Acción</th>
                
                
              </tr>
            </thead>
            <tbody>
              {data.map(item => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.nui}</td>
                  <td>{item.antecedentes_oncologicos}</td>
                  <td>{item.ocupacion}</td>
                  <td>{item.nombre}</td>
                  <td>{item.apellido}</td>
                  <td>{item.telefono}</td>
                 
                  <td><button className='btn btn-success' ><BScons.BsFillPencilFill/></button>
                  <button className='btn btn-primary'><Aicons.AiFillEye/></button>
                  <button className='btn btn-danger' ><BScons.BsFillTrashFill/></button>
                  </td>
                
                </tr>
              ))}

            </tbody>
          </table>


        </>
    )
}