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

const registerProduct = async (req, res) => {
  const { name } = req.body;
  const product = await productService.registerProduct(name);
  if (!product) return res.status(400);

  return res.status(201).json(product);
};

const updateProduct = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  const product = await productService.updateProduct(id, name);
  if (!product) return res.status(404).json({ message: 'Product not found' });

  return res.status(200).json(product);
};

module.exports = {
  getAll,
  getProductById,
  registerProduct,
  updateProduct,
};