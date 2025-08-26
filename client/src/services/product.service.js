import api from "./api.js";
const PRODUCT_API = import.meta.env.VITE_PRODUCT_API;

// Get all products
const getAllProducts = async () => {
  return await api.get(`${PRODUCT_API}`);
};

// Get product by id
const getProductById = async (id) => {
  return await api.get(`${PRODUCT_API}/${id}`);
};

// Update product by id
const updateProductById = async (id, product) => {
  return await api.put(`${PRODUCT_API}/${id}`, product);
};

// Add product
const insertProduct = async (product) => {
  return await api.post(PRODUCT_API, product);
};

// Delete product
const deleteProduct = async (id) => {
  return await api.delete(`${PRODUCT_API}/${id}`);
};

const ProductServices = {
  getAllProducts,
  getProductById,
  updateProductById,
  deleteProduct,
  insertProduct,
};

export default ProductServices;
