const connection = require('./connetion');

const getAll = async () => {
  const [products] = await connection.execute(
    'SELECT * FROM StoreManager.products;',
  );
  return products;
};

const getProductById = async (id) => {
   const [product] = await connection.execute(
    'SELECT * FROM StoreManager.products WHERE id = ?;', [id],
  );

  return product;
};

module.exports = {
  getAll,
  getProductById,
};