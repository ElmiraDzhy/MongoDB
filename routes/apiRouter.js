const express = require('express')
const apiRouter = express.Router()
const movieRouter = require('./movieRouter')

apiRouter.use('/movies', movieRouter);

module.exports = apiRouter;