import ProductListingPage from "@/views/ProductListingPage";
import FavoritesPage from "@/views/FavoritesPage";
import ProductDetailPage from "@/views/ProductDetailPage";

export const ROUTES = Object.freeze({
    home: {
        name: 'home',
        path: '/',
        component: ProductListingPage,
    },
    productDetails: {
        name: 'productDetails',
        path: 'product/:productId',
        component: ProductDetailPage,
    },
    favorites: {
        name: 'favorites',
        path: 'favorites/:userId',
        component: FavoritesPage,
    },

})