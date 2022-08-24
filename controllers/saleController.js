const saleService = require('../services/saleService');

const getSales = async (_req, res) => {
  const sales = await saleService.getSales();
  return res.status(200).json(sales);
};

const getSaleById = async (req, res) => {
  const { id } = req.params;
  const sale = await saleService.getSaleId(id);
  if (!sale) return res.status(404).json({ message: 'Sale not found' });
  return res.status(200).json(sale);
};

module.exports = {
  getSales,
  getSaleById,
}; 