import React, { useState, useEffect } from 'react';
import {getToken} from '../../../api/token'
import * as BScons from 'react-icons/bs';
import * as Aicons from 'react-icons/ai'



export const DataPaciente = ()=>{

    const [data, setData] = useState([]);
    const TOKEN = getToken()

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
      
        <button className='btn btn-success' > <BScons.BsPersonFillAdd/> Añadir</button>
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