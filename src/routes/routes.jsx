import routesAdmin from './routes.admin';
import routesClient from './routes.client';
import {BasicLayout} from '../layouts';
import {Error404} from '../pages';

// [[{1},{2}],[{3}]]
// [{1},{2},{3}]

const routes = [
    ...routesAdmin, 
    ...routesClient,
    {
        path: "*",
        layout: BasicLayout,
        component: Error404,
    },
];

export default routes;