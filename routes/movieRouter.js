const express = require('express')
const movieRouter = express.Router()
const MovieController = require('../controllers/Movie.controller')

movieRouter.get('/', MovieController.getAll);
movieRouter.post('/', MovieController.createOne);
movieRouter.get('/:id', MovieController.getOne);
movieRouter.patch('/:id', MovieController.update);
movieRouter.delete('/:id', MovieController.delete);

module.exports = movieRouter;