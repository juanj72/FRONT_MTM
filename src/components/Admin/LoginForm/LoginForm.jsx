import './LoginForm.scss';
import {Form, Button} from 'semantic-ui-react';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import {useAuth} from '../../../hooks'
import {loginApi} from '../../../api/user';
 
export const LoginForm = () => {
    useAuth();
    const {login} = useAuth();
    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: Yup.object(validationSchema()),
        onSubmit: async (formValue) => {
            //console.log("Datos enviados");
            //console.log(formValue);
            try {
                const response = await loginApi(formValue);
                const {access} = response;
                // console.log(access)
                login(access);
                
            } catch (error) {
                console.log("Error");
                console.log(error);
            }
        }

    });  
  
    return (
        <>
            <Form className='login-form-admin' onSubmit={formik.handleSubmit}>
                <Form.Input
                    name="email"
                    placeholder="Correo Electrónico"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    error={formik.errors.email}
                />
                <Form.Input
                    name="password"
                    type='password'
                    placeholder="Contraseña"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    error={formik.errors.password}
                />
                <Button type='submit' content="Iniciar sesión" primary fluid/>
            </Form>    
        </>
  )
}

const initialValues = () => {
    return {
        email: "",
        password: "",
    };
}

const validationSchema = () => {
    return {
        email: Yup.string().email("error en dato").required(true),
        password: Yup.string().required("inserte una contraseña")
    }
}
