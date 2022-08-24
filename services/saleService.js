const saleModel = require('../models/saleModel');

const getAll = async () => {
  const result = await saleModel.getAll();
  return result;
};

const getSaleById = async (id) => {
  const result = await saleModel.getSaleById(id);
  return result;
};

module.exports = {
  getAll,
  getSaleById,
}; 