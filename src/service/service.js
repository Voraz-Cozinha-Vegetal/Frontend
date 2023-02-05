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

function getUserCart(config) {
    return axios.get(`${API}/cart`, config);
}

function deleteCartItem(params, config) {
    return axios.delete(`${API}/cart/${params}`, config);
}

function postUserAddress(body, config) {
    return axios.post(`${API}/address`, body, config);
}

function editUserAddress(body, config) {
    return axios.put(`${API}/address`, body, config);
}

function getUserAddress(config) {
    return axios.get(`${API}/address`, config);
}

const appService = {
    getProducts,
    getProduct,
    postCart,
    getUserCart,
    deleteCartItem,
    postUserAddress,
    editUserAddress,
    getUserAddress,
}

export default appService;