import React, { useState, useEffect } from 'react';
import {getToken} from '../../../../api/token'

export const AddPadrino = ({ paciente }) => {
    console.log(paciente)

    const [data, setData] = useState([]);
    const TOKEN = getToken()



    useEffect(() => {
        fetchData();
      }, []);

    const fetchData = async () => {
        const response = await fetch('http://127.0.0.1:8000/api/padrino/', { method: 'GET', headers: { Authorization: `Bearer ${TOKEN}` } });
        const jsonData = await response.json();
        setData(jsonData);
    
        console.log(jsonData)
    
      };





    return (
        <>
            <h1>agregar padrino</h1>
    


            <form action="">
            <label htmlFor="">seleccion el padrino</label>
            <select className="form-select" aria-label="Default select example" name="padrino" >  
            {data.map(item => (
                
                    
                <option value={item.id}>{item.nombre} {item.apellido}</option>

               
              
              
            
           
          ))}
          </select>
            

            <button className="btn btn-primary" >asignar</button>

            </form>
           

        </>
    )

}