import Home from "@/views/Home";
import FavoriteList from "@/views/FavoriteList";
import ProductDetail from "@/views/ProductDetail";

export const HOME = {
    name: 'home',
    path: '/',
    component: Home,
};

export const PRODUCT_DETAILS = {
    name: 'productDetails',
    path: '/product/:productId',
    component: ProductDetail,
};

export const FAVORITES = {
    name: 'favorites',
    path: '/favorites/:userId',
    component: FavoriteList,
};