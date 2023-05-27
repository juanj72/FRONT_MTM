import {AdminLayout} from '../layouts';
import {HomeAdmin,pacientes,padrinos,dreams,familiares} from '../pages/Admin';


const routesAdmin = [
    {
        path: "/admin",
        layout: AdminLayout,
        component: HomeAdmin,
    },
    {
        path: "/admin/paciente",
        layout: AdminLayout,
        component: pacientes,
    },
    {
        path: "/admin/padrinos",
        layout: AdminLayout,
        component: padrinos,
    },
    {
        path: "/admin/sueños",
        layout: AdminLayout,
        component: dreams,
    },
    {
        path: "/admin/familiares",
        layout: AdminLayout,
        component: familiares,
    }
   
];

export default routesAdmin;