import React, { useState, useEffect } from 'react';
import {getToken} from '../../../../api/token'


export const ListarPadrinos = ({paciente}) =>{
    console.log(paciente?.id)

    const [data, setData] = useState([]);
    const TOKEN = getToken()

    useEffect(() => {
        
            fetchData();
          
        
      }, [paciente]);   
     
      
        const fetchData = async () => {
            if(paciente){
            const response = await fetch(`http://127.0.0.1:8000/api/pacientelistpadrino/${paciente?.id}`, { method: 'GET', headers: { Authorization: `Bearer ${TOKEN}` } });
            const jsonData = await response.json(); 
            setData(jsonData); 
    
            console.log(response);    
            }
              
          }; 

      
     
        


        
    if(paciente){
        
      
        return (
            <>
            <h1>lista de padrinos {paciente.id} </h1>
            
    
            <table className="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">First</th>
          <th scope="col">Last</th>
          <th scope="col">Handle</th>
        </tr>
      </thead>
      <tbody>
      {data?.map(item => (
                <tr key={item.id}>
    
                  <td>{item.nombre}</td>
                  <td>{item.apellido}</td>
    
    
                  <td>{item.id}</td>
                  <td>{item.correo}</td>
                 
                </tr>
              ))}
    
      </tbody> 
    </table>
            
            </>
        )

    }else{
        return(
            <>
            <h2>no hay datos</h2>
            </>
        )
    } 
 





  

}