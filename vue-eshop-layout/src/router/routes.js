import ProductListingPage from "@/views/ProductListingPage";
import FavoritesPage from "@/views/FavoritesPage";
import ProductDetailPage from "@/views/ProductDetailPage";

export const HOME = {
    name: 'home',
    path: '/',
    component: ProductListingPage,
};

export const PRODUCT_DETAILS = {
    name: 'productDetails',
    path: '/product/:productId',
    component: ProductDetailPage,
};

export const FAVORITES = {
    name: 'favorites',
    path: '/favorites/:userId',
    component: FavoritesPage,
};