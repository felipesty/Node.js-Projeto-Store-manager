const saleModel = require('../models/saleModel');

const getSales = async () => {
  const result = await saleModel.getSales();
  return result;
};

const getSaleById = async (id) => {
  const result = await saleModel.getSaleById(id);
  return result;
};

module.exports = {
  getSales,
  getSaleById,
}; 