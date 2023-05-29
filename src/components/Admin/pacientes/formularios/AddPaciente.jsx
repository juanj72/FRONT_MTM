import {useFormik} from 'formik';
import * as Yup from 'yup';
import {getToken} from '../../../../api/token'
import {BASE_API} from '../../../../utils/constants'


export const AddPaciente=({props})=>{
    
    const TOKEN = getToken()
    const formik = useFormik({
        initialValues: initialValues(),
        // validationSchema: Yup.object(validationSchema()),
        onSubmit:  (formValue) => {
            console.log("Datos enviados");
           

           
                const fetchData = async () => {
                  const response = await fetch(`${BASE_API}/api/paciente/`,{method:'POST',headers:{'Content-Type': 'application/json',Authorization:`Bearer ${TOKEN}`},body:JSON.stringify(formValue)});
                  const jsonData = await response.json();
                  console.log(jsonData)
                };
                fetchData();


            props()
            initialValues()

            
             
          
              
        }

    }); 



    return(
        <>
      
        <form onSubmit={formik.handleSubmit}>
  <div className="mb-3">
    <label  className="form-label">Nombre</label>
    <input type="text" className="form-control"  aria-describedby="emailHelp" value={formik.values.nombre}
                    onChange={formik.handleChange} name='nombre'  error={formik.errors.nombre} />
    
  </div>
  <div className="mb-3">
    <label className="form-label">Apellido</label>
    <input type="text" className="form-control" value={formik.values.apellido}
                    onChange={formik.handleChange} name='apellido' error={formik.errors.apellido} />
  </div>

  <div className="mb-3">
    <label  className="form-label">Nui</label>
    <input type="number" className="form-control" value={formik.values.nui}
                    onChange={formik.handleChange} name='nui' error={formik.errors.nui} />
  </div>
  <div className="mb-3">
    <label  className="form-label">fecha_inicio_tratamiento</label>
    <input type="date" className="form-control" value={formik.fecha_inicio_tratamiento}
                    onChange={formik.handleChange} name='fecha_inicio_tratamiento' error={formik.fecha_inicio_tratamiento} />
  </div>
  <div className="mb-3">
    <label  className="form-label">Fecha de ingreso</label>
    <input type="date" className="form-control" value={formik.values.fecha_ingreso}
                    onChange={formik.handleChange}  name='fecha_ingreso' error={formik.errors.fecha_ingreso} />
  </div>

  <div className="mb-3">
    <label  className="form-label">Seguro funebre</label>
    <input type="text" className="form-control" value={formik.values.seguro_funebre}
                    onChange={formik.handleChange} name='seguro_funebre' error={formik.errors.seguro_funebre} />
  </div>
  <div className="mb-3">
    <label  className="form-label">Telefono</label>
    <input type="number" className="form-control"  value={formik.values.telefono}
                    onChange={formik.handleChange}  name='telefono' error={formik.errors.telefono} />
  </div>
  <div className="mb-3">
    <label  className="form-label">Correo</label>
    <input type="email" className="form-control" value={formik.values.correo}
                    onChange={formik.handleChange} name='correo' error={formik.errors.correo} />
  </div>
  <div className="mb-3">
    <label  className="form-label">Direccion</label>
    <input type="text" className="form-control" value={formik.values.direccion_residencia}
                    onChange={formik.handleChange} name='direccion_residencia' error={formik.errors.direccion_residencia} />
  </div>
 
 
  
  <div className="modal-footer">
  <button type='submit' className="btn btn-primary">Agregar</button>
      </div>
</form>
        </>
    )
}

const initialValues = () => {
    return {
        nombre: "",
        apellido: "",
        nui:"",
        fecha_inicio_tratamiento:"",
        fecha_ingreso:"",
        seguro_funebre:"",
        telefono:"",
        correo:"",
        direccion_residencia:"",
       

    };
}

const validationSchema = () => {
    return {
        nombre: Yup.string(),
        apellido: Yup.string(),
        tipo_persona: Yup.string(length=255),
        estrato:Yup.number(),
        fecha_nacimiento: Yup.date(),
        telefono: Yup.number(),
        direccion: Yup.string(),
        correo: Yup.string().email("error en dato"),
        tiempo_apadrinando: Yup.number(),
        campo: Yup.string().email("error en dato"),

        
    }
}