const productModel = require('../models/productModel');

const getAll = async () => {
  const products = productModel.getAll();
  return products;
};

const getProductById = async (id) => {
  const product = await productModel.getProductById(id);
  if (!product) return null;
  return product;
};

const registerProduct = async (name) => {
  const product = await productModel.registerProduct(name);
  if (!product) return null;
  return product;
};

const updateProduct = async (id, name) => {
  const product = await productModel.updateProduct(id, name);
  if (!product) return null;
  return product;
};

const deleteProductById = async (id) => {
  const product = await productModel.deleteProductById(id);
  if (!product) return false;
  
  return product;
};

module.exports = {
  getAll,
  getProductById,
  registerProduct,
  updateProduct,
  deleteProductById,
};