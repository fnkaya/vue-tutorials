import axios from "axios";

const BASE_URL = 'https://my-json-server.typicode.com/modanisa/bootcamp-db';
const PRODUCTS_URL = `${BASE_URL}/products`;

export const getProductList = () => axios.get(PRODUCTS_URL).then(response => response.data);
