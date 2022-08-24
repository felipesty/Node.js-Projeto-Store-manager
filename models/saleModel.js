const connection = require('./connection');

const getSales = async () => {
  const [sales] = await connection.execute(
    `SELECT sp.sale_id AS saleId, s.date, sp.product_id AS productId, sp.quantity
    FROM StoreManager.sales AS s
    INNER JOIN StoreManager.sales_products AS sp
    ON sp.sale_id = s.id
    ORDER BY sp.sale_id, sp.product_id;`,
  );
  return sales;
};

const getSaleById = async (id) => {
  const [sale] = await connection.execute(
    `SELECT sp.sale_id AS saleId, s.date, sp.product_id AS productId, sp.quantity
    FROM StoreManager.sales AS s
    INNER JOIN StoreManager.sales_products AS sp
    ON sp.sale_id = s.id
    WHERE sp.sale_id=?
    ORDER BY sp.sale_id, sp.product_id;`, [id],
  );
  if (sale.length === 0) return null;
  return sale;
};

module.exports = {
  getSales,
  getSaleById,
};