//import modules
const express = require('express');

const productRoute = require('./routes/product');

//init express
const app = express();

//middleware parser functions to be used every 
//time a request is made on the server 

app.use(express.urlencoded({extended: true}));
app.use(express.json());

// when req is made, will move to /routes/product.js
app.use('/product', productRoute);

//export module to be used in server.js
module.exports = app;



