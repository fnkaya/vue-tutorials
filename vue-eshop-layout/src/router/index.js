import Vue from 'vue';
import VueRouter from 'vue-router'
import * as ROUTES from "./routes";

Vue.use(VueRouter);

const PageNotFound = {template: '<div>Page Not Found</div>'}

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            name: ROUTES.HOME.name,
            path: ROUTES.HOME.path,
            component: ROUTES.HOME.component,
        },
        {
            name: ROUTES.PRODUCT_DETAILS.name,
            path: ROUTES.PRODUCT_DETAILS.path,
            component: ROUTES.PRODUCT_DETAILS.component,
        },
        {
            name: ROUTES.FAVORITES.name,
            path: ROUTES.FAVORITES.path,
            component: ROUTES.FAVORITES.component,
        },
        {
            path: '*', component: PageNotFound
        },
    ]
})

export default router;