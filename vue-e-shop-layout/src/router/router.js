import Vue from 'vue';
import VueRouter from 'vue-router'
import {ROUTES} from "@/router/ROUTES";

Vue.use(VueRouter);

const PageNotFound = {template: '<div>Page Not Found</div>'}

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            name: ROUTES.home.name,
            path: ROUTES.home.path,
            component: ROUTES.home.component
        },
        {
            name: ROUTES.favorites.name,
            path: ROUTES.favorites.path,
            component: ROUTES.favorites.component
        },
        {
            path: '*', component: PageNotFound
        },
    ]
})

export default router;