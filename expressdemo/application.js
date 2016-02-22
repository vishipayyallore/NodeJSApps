'use strict';

var express = require('express');

var app = express.createServer();

var products = `
{ "products": [{ "name": "Pen", "price": 10.23 }, 
{ "name": "Books of Ranga", "price": 12.85 }] }
`;

app.get('/expressdemo/api', function(req, res){
    res.send('Welcome to Ranga NodeJS API!');
});

app.get('/expressdemo/api/healthcheck', function (req, res) {
    res.send('Express Web API\'s Health Check is Good.');
});

app.get('/expressdemo/api/products', function (req, res) {
    res.json(products);
});

app.listen(process.env.PORT);

module.exports = app;