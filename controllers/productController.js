const productService = require('../services/productService');

const getAll = async (_req, res) => {
  const result = await productService.getAll();
  return res.status(200).json(result);
};

const getProductById = async (req, res) => {
  const { id } = req.params;
  const result = await productService.getProductById(id);
  if (!result) return res.status(404).json({ message: 'Product not found' });
  return res.status(200).json(result);
};

module.exports = {
  getAll,
  getProductById,
};