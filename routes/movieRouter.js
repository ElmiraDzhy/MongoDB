const express = require('express')
const movieRouter = express.Router()
const MovieController = require('../controllers/Movie.controller')
const rentRouter = require("./rentRouter");

movieRouter.get('/', MovieController.getAll);
movieRouter.post('/', MovieController.createOne);
movieRouter.get('/id/:id', MovieController.getOne);
movieRouter.patch('/:id', MovieController.update);
movieRouter.delete('/:id', MovieController.delete);
movieRouter.get('/search', MovieController.getSearchOne);
movieRouter.get('/search/all', MovieController.getSearchAll);
movieRouter.get('/fans/:id', MovieController.getUsersLikedFilm);

movieRouter.use('/rent', rentRouter);

module.exports = movieRouter;