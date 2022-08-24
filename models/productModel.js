const connection = require('./connection');

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

  if (product.length === 0) return null;
  return product[0];
};

const registerProduct = async (name) => {
  const [product] = await connection.execute(
    'INSERT INTO StoreManager.products (name) VALUES (?);', [name],
  );
  return { id: product.insertId, name };
};

const updateProduct = async (id, name) => {
  await connection.execute(
    'UPDATE StoreManager.products SET name = ? WHERE id = ?;', [name, id],
  );
  return { id, name };
};

const deleteProductById = async (id) => {
  const product = await connection.execute(
    'DELETE FROM StoreManager.products WHERE id = ?;', [id],
  );
  if (product.length === 0) return null;

  return product;
};

module.exports = {
  getAll,
  getProductById,
  registerProduct,
  updateProduct,
  deleteProductById,
};