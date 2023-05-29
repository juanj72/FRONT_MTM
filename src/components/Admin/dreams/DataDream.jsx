import React, { useState, useEffect } from 'react';
import {getToken} from '../../../api/token'
import * as BScons from 'react-icons/bs';
import * as Aicons from 'react-icons/ai'


export const DataDream = () => {

    
    const [data, setData] = useState([]);
    const TOKEN = getToken()

    useEffect(() => {
      const fetchData = async () => {
        const response = await fetch('http://127.0.0.1:8000/api/Sueños/',{method:'GET',headers:{Authorization:`Bearer ${TOKEN}`}});
        const jsonData = await response.json();
        setData(jsonData);
      };
      fetchData();
    }, []);


    return (
        <>


{data.map(item => (
     <div class="card" key={item.id}>

    <img src="" className='card-img-top' alt="" />

     <div class="card-body">
         <h5 class="card-title"><BScons.BsFillMoonFill/>{item.id} </h5>
         <p class="card-text">{item.nombre}</p>
         <a href="#" class="btn btn-primary">Go somewhere</a>
     </div>
 </div>
                
              ))}



           
        </>
    )
}