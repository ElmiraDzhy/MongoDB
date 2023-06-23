const express = require('express')
const movieRouter = express.Router()
const MovieController = require('../controllers/Movie.controller')

movieRouter.get('/', MovieController.getAll);
movieRouter.post('/', MovieController.createOne);

module.exports = movieRouter;