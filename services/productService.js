const productModel = require('../models/productModel');

const getAll = async () => {
  const products = productModel.getAll();
  return products;
};

const getProductById = async (id) => {
  const product = await productModel.getProductById(id);
  if (product.length === 0) return null;
  return product;
};

module.exports = {
  getAll,
  getProductById,
};