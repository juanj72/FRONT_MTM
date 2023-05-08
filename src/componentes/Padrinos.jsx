import React, { useState, useEffect } from 'react';
import * as BScons from 'react-icons/bs';

function TablaPadrinos(){
     // Estado para guardar los datos de la API
  const [data, setData] = useState([]);

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
                </tr>
              ))}

            </tbody>
          </table>
        
        </>
    );
}

export default TablaPadrinos;