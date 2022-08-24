const express = require('express');
const app = require('./app');
require('dotenv').config();
const { ValidationName } = require('./middlewares/validationName');
const productController = require('./controllers/productController');
const saleController = require('./controllers/saleController');

app.use(express.json());

app.get('/products', productController.getAll);
app.get('/products/:id', productController.getProductById);
app.post('/products', ValidationName, productController.registerProduct);
app.put('/products/:id', ValidationName, productController.updateProduct);

app.get('/sales', saleController.getSales);
app.get('/sales/:id', saleController.getSaleById);
// não altere esse arquivo, essa estrutura é necessária para à avaliação do projeto

app.listen(process.env.PORT, () => {
  console.log(`Escutando na porta ${process.env.PORT}`);
});
