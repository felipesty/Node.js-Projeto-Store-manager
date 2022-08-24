const express = require('express');
const app = require('./app');
require('dotenv').config();
const { ValidationName } = require('./middlewares/validationNameReq4');
const productController = require('./controllers/productController');

app.use(express.json());

app.get('/products', productController.getAll);
app.get('/products/:id', productController.getProductById);
app.post('/products', ValidationName, productController.registerProduct);

// não altere esse arquivo, essa estrutura é necessária para à avaliação do projeto

app.listen(process.env.PORT, () => {
  console.log(`Escutando na porta ${process.env.PORT}`);
});
