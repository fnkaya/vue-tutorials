import Vue from "vue";
import VueRouter from "vue-router";
import * as ROUTES from "@/router/routes"
import HomePage from "@/views/HomePage";

Vue.use(VueRouter);

const PageNotFound = { template: '<div>Page Not Found</div>' }

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: ROUTES.HOME,
            component: HomePage,
        },
        {
            path: ROUTES.VIDEO,
            component: () => import('@/views/VideoPage'),
        },
        {
            path: ROUTES.FAVORITES,
            component: () => import('@/views/FavoritesPage'),
        },
        {
            path: '*',
            component: PageNotFound,
        },
    ]
});

export default router;