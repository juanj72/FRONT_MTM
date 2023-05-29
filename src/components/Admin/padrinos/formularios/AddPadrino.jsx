import {useFormik} from 'formik';
import * as Yup from 'yup';
import {getToken} from '../../../../api/token'
import {BASE_API} from '../../../../utils/constants'


export const AddPadrino=()=>{
    const formik = useFormik({
        initialValues: initialValues(),
        // validationSchema: Yup.object(validationSchema()),
        onSubmit:  (formValue) => {
            console.log("Datos enviados");
            console.log(formValue);

          

         
        }

    }); 



    return(
        <>
        <form onSubmit={formik.handleSubmit}>
  <div className="mb-3">
    <label  className="form-label">Nombre</label>
    <input type="text" className="form-control"  aria-describedby="emailHelp" value={formik.values.nombre}
                    onChange={formik.handleChange} name='nombre' />
    
  </div>
  <div className="mb-3">
    <label className="form-label">Apellido</label>
    <input type="text" className="form-control" value={formik.values.apellido}
                    onChange={formik.handleChange} name='apellido'/>
  </div>

  <div className="mb-3">
    <label  className="form-label">Tipo de persona</label>
    <input type="text" className="form-control" value={formik.values.tipo_persona}
                    onChange={formik.handleChange} name='tipo_persona' />
  </div>
  <div className="mb-3">
    <label  className="form-label">Fecha de nacimiento</label>
    <input type="date" className="form-control" value={formik.values.fecha_nacimiento}
                    onChange={formik.handleChange}  name='fecha_nacimiento' />
  </div>

  <div className="mb-3">
    <label  className="form-label">Teléfono</label>
    <input type="number" className="form-control" value={formik.values.telefono}
                    onChange={formik.handleChange} name='telefono' />
  </div>
  <div className="mb-3">
    <label  className="form-label">Direccion</label>
    <input type="text" className="form-control"  value={formik.values.direccion}
                    onChange={formik.handleChange}  name='direccion' />
  </div>
  <div className="mb-3">
    <label  className="form-label">Correo</label>
    <input type="email" className="form-control" value={formik.values.correo}
                    onChange={formik.handleChange} name='correo' />
  </div>
  <div className="mb-3">
    <label  className="form-label">Tiempo apadrinando(años)</label>
    <input type="number" className="form-control" value={formik.values.tiempo_apadrinando}
                    onChange={formik.handleChange} name='tiempo_apadrinando' />
  </div>
  <div className="mb-3">
    <label  className="form-label">Campo (sector de labora)</label>
    <input type="text" className="form-control" value={formik.values.campo}
                    onChange={formik.handleChange} name='campo' />
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
        tipo_persona:"",
        fecha_nacimiento:"",
        telefono:"",
        direccion:"",
        correo:"",
        tiempo_apadrinando:"",
        campo:"",

    };
}

const validationSchema = () => {
    return {
        nombre: Yup.string().required(true),
        apellido: Yup.string().required(true),
        tipo_persona: Yup.string().required(true),
        fecha_nacimiento: Yup.date().required(true),
        telefono: Yup.number().required(true),
        direccion: Yup.string().required(true),
        correo: Yup.string().email("error en dato").required(true),
        tiempo_apadrinando: Yup.number().required(true),
        campo: Yup.string().email("error en dato").required(true),

        
    }
}