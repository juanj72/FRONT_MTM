import React, { useState, useEffect } from 'react';
import {getToken} from '../../../api/token'
import * as BScons from 'react-icons/bs';
import * as Aicons from 'react-icons/ai'

export const padrinos =()=>{
    
    const [data, setData] = useState([]);
    const TOKEN = getToken()

    useEffect(() => {
      const fetchData = async () => {
        const response = await fetch('http://127.0.0.1:8000/api/padrino/',{method:'GET',headers:{Authorization:`Bearer ${TOKEN}`}});
        const jsonData = await response.json();
        setData(jsonData);
      };
      fetchData();
    }, []);

        console.log(data);

    return(
        <>
        <h1>Padrinos</h1>
        <button className='btn btn-success' > <BScons.BsPersonFillAdd/> Añadir</button>
        <table className="table  table-hover">
            <thead>
              <tr>
                <th scope="col">id</th>
                <th scope="col">Nombre</th>
                <th scope="col">Apellido</th>
                <th scope="col">Tipo de persona</th>
                <th scope='col' >Estrato</th>
                <th scope='col' >Telefono</th>
                <th scope='col' >Direccion</th>
                <th scope='col' >Correo</th>
                <th scope='col' >Tiempo apadrinando</th>
                <th scope='col' >Campo de desempeño</th>
                <th scope='col' >Acción</th>
              </tr>
            </thead>
            <tbody>
              {data.map(item => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.nombre}</td>
                  <td>{item.apellido}</td>
                  <td>{item.tipo_persona}</td>
                  <td>{item.estrato}</td>
                  <td>{item.telefono}</td>
                  <td>{item.direccion}</td>
                  <td>{item.correo}</td>
                  <td>{item.tiempo_apadrinando}</td>
                  <td>{item.campo}</td>
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