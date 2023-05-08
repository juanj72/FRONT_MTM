import React, { useState, useEffect } from 'react';
import * as Gocons from 'react-icons/go';


function TablaDreams(){
     // Estado para guardar los datos de la API
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://127.0.0.1:8000/api/Sueño/');
      const jsonData = await response.json();
      setData(jsonData);
    };
    fetchData();
  }, []);


    return (
        <>
        <h1>Sueños</h1>

        <button className='btn btn-success' > <Gocons.GoDiffAdded/> Añadir</button>
        <table className="table  table-hover">
            <thead>
              <tr>
                <th scope="col">id</th>
                <th scope="col">Nombre</th>
                <th scope="col">Apellido</th>
 
              </tr>
            </thead>
            <tbody>
              {data.map(item => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.nombre}</td>
                  <td>{item.tipo}</td>
    
                </tr>
              ))}

            </tbody>
          </table>
        
        </>
    );
}

export default TablaDreams;