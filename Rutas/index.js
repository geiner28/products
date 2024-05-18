
const express = require('express');
const rutas = require('./rutas');

function  roots (app){

    const router = express.Router();
    app.use(rutas);

 app.use('/', router);

}

module.exports = roots;