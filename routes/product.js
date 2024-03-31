const express = require('express')

const getProduct = require('../controllers/productController')
const routes = express.Router()

routes.get('/get-product',getProduct)

module.exports = routes;