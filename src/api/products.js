import api from './axios';

const prefix1 = '/products';

export const getProducts = () => api.get(prefix1);

export const getProduct = (id) => api.get(`${prefix1}/${id}`);

export const deleteProduct =(id) => api.delete(`${prefix1}/${id}`);

export const createProduct = (data) =>api.post(prefix1,data);