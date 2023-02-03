import axios from "axios";

const API = process.env.REACT_APP_API_URL;

function getProducts() {
    return axios.get(`${API}/products`);
}

function getProduct(params) {
    return axios.get(`${API}/products/${params}`);
}

function postCart(body, config) {
    return axios.post(`${API}/cart`, body, config);
}

const appService = {
    getProducts,
    getProduct,
    postCart,
}

export default appService;