const express = require('express');
const route = express.Router();
const homeController = require('./src/controllers/homeController');
const contactController = require('./src/controllers/contactController');

//Rotas da home
route.get('/', homeController.homePage);
route.post('/', homeController.sendPost);

//Rota contato
route.get('/contact', contactController.contactPage);

module.exports = route;