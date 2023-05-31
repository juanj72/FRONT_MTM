import React, { useState, useEffect } from 'react';
import {getToken} from '../../../../api/token'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { BASE_API } from '../../../../utils/constants'

import withReactContent from 'sweetalert2-react-content';
import Swal from 'sweetalert2';



export const AddFamiliarPaciente = ({ paciente }) => {
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
            const response = await fetch(`${BASE_API}/api/paciente_familiar/`, { method: 'POST', headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${TOKEN}` }, body: JSON.stringify({"paciente":paciente.id,"familiar":formValue.familiar}) });
            const jsonData = await response.json();
            console.log(response.status);
            if (response.status ==201){
                MySwal.fire({
                    title: <p>Hello World</p>,
                    didOpen: () => {
                      // `MySwal` is a subclass of `Swal` with all the same instance & static methods
                      Swal.fire(
                        `se ha agregago el familiar numero ${formValue.familiar} al paciente numero ${paciente.id}`,
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
        
    console.log(formValue.familiar,paciente.id)
        }
    
      });







    useEffect(() => {
        fetchData();
      }, []);

    const fetchData = async () => {
        const response = await fetch('http://127.0.0.1:8000/api/Familiar/', { method: 'GET', headers: { Authorization: `Bearer ${TOKEN}` } });
        const jsonData = await response.json();
        setData(jsonData);
    
        console.log(jsonData)
    
      };





    return (
        <>
            <h1>agregar familiar</h1>
    


            <form action="" onSubmit={formik.handleSubmit}>
            <label htmlFor="">Seleccion el familiar</label>
            <select className="form-select" aria-label="Default select example" name="familiar" value={formik.values.familiar} onChange={formik.handleChange} error={formik.errors.familiar}>  
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
      familiar: "",
     
    };
  }
  