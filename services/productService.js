const productModel = require('../models/productModel');

const getAll = async () => productModel.getAll();

const getProductById = async (id) => {
  const product = await productModel.getProductById(id);
  if (product.length === 0) return null;
  return product;
};

module.exports = {
  getAll,
  getProductById,
};