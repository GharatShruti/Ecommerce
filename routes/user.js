const express = require('express')

const getUser = require('../controllers/userControllers')
const routes = express.Router()

routes.get('/get-user',getUser)

module.exports = routes;