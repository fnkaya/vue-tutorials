import axios from "axios";

const BASE_URL = 'https://my-json-server.typicode.com/modanisa/bootcamp-db';
const API_URL = Object.freeze({
    productList: `${BASE_URL}/products`
});

export const getProductList = () => axios.get(API_URL.productList).then(response => response.data);
