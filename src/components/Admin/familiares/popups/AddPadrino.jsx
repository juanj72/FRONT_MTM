import React, { useState, useEffect } from 'react';
import {getToken} from '../../../../api/token'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { BASE_API } from '../../../../utils/constants'

import withReactContent from 'sweetalert2-react-content';
import Swal from 'sweetalert2';



export const AddPadrino = ({ paciente }) => {
    console.log(paciente)

    const [data, setData] = useState([]);
    const TOKEN = getToken()
    const MySwal = withReactContent(Swal)


    const formik = useFormik({
        initialValues: initialValues(),
        // validationSchema: Yup.object(validationSchema()),
        onSubmit: (formValue) => {
          console.log("Datos enviados");
    
    
          const fetchData2 = async () => {
            const response = await fetch(`${BASE_API}/api/paciente_padrino/`, { method: 'POST', headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${TOKEN}` }, body: JSON.stringify({"paciente":paciente.id,"padrino":formValue.padrino}) });
            const jsonData = await response.json();
            console.log(response.status);
            if (response.status ==201){
                MySwal.fire({
                    title: <p>Hello World</p>,
                    didOpen: () => {
                      // `MySwal` is a subclass of `Swal` with all the same instance & static methods
                      Swal.fire(
                        `se ha agregago el parino numero ${formValue.padrino} al paciente numero ${paciente.id}`,
                        '',
                        'success'
                      )
                    },
                  })
            }else{
                alert('papi revise el error')
            }
          };
    //   
          fetchData2();
        
    console.log(formValue.padrino,paciente.id)
        }
    
      });







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
    


            <form action="" onSubmit={formik.handleSubmit}>
            <label htmlFor="">seleccion el padrino</label>
            <select className="form-select" aria-label="Default select example" name="padrino" value={formik.values.padrino} onChange={formik.handleChange} error={formik.errors.padrino}>  
            {data.map(item => (
                
                    
                <option value={item.id}>{item.nombre} {item.apellido}</option>

               
              
              
            
           
          ))}
          </select>
            

            <button className="btn btn-primary" type='submit' >asignar</button>

            </form>
           

        </>
    )

}


const initialValues = () => {
    return {
      padrino: "",
     
    };
  }
  