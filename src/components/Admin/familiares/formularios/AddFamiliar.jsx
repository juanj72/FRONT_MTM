import { useFormik } from 'formik';
import * as Yup from 'yup';
import { getToken } from '../../../../api/token'
import { BASE_API } from '../../../../utils/constants'



export const AddFamiliar = ({props}) => {

    const TOKEN = getToken()
    const formik = useFormik({
        initialValues: initialValues(),
        // validationSchema: Yup.object(validationSchema()),
        onSubmit: (formValue) => {
            console.log("Datos enviados");



            const fetchData = async () => {
                const response = await fetch(`${BASE_API}/api/Familiar/`, { method: 'POST', headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${TOKEN}` }, body: JSON.stringify(formValue) });
                const jsonData = await response.json();

            };
            fetchData();




           props()

        }

    });


   





    return (
        <>
            <form onSubmit={formik.handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">Nui</label>
                    <input type="number" className="form-control" aria-describedby="emailHelp" value={formik.values.nui}
                        onChange={formik.handleChange} name='nui' error={formik.errors.nui} />

                </div>
                <div className="mb-3">
                    <label className="form-label">Antecedentes oncologicos</label>
                    <input type="text" className="form-control" value={formik.values.antecedentes_oncologicos}
                        onChange={formik.handleChange} name='antecedentes_oncologicos' error={formik.errors.antecedentes_oncologicos} />
                </div>

                <div className="mb-3">
                    <label className="form-label">Ocupacion</label>
                    <input type="text" className="form-control" value={formik.values.ocupacion}
                        onChange={formik.handleChange} name='ocupacion' error={formik.errors.ocupacion} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Nombre</label>
                    <input type="text" className="form-control" value={formik.values.nombre}
                        onChange={formik.handleChange} name='nombre' error={formik.errors.nombre} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Apellido</label>
                    <input type="text" className="form-control" value={formik.values.apellido}
                        onChange={formik.handleChange} name='apellido' error={formik.errors.apellido} />
                </div>

                <div className="mb-3">
                    <label className="form-label">Teléfono</label>
                    <input type="number" className="form-control" value={formik.values.telefono}
                        onChange={formik.handleChange} name='telefono' error={formik.errors.telefono} />
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
      nui: "",
      antecedentes_oncologicos: "",
      ocupacion: "",
      nombre: "",
      apellido: "",
      telefono: "",
      
  
    };
  }
  