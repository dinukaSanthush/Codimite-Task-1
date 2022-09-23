const express = require('express');
const productRoute = require('./routes/product');
const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use('/product', productRoute);

module.exports = app;



