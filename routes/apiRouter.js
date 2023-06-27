const express = require('express');
const apiRouter = express.Router();
const movieRouter = require('./movieRouter');
const userRouter = require('./userRouter');
const rentRouter = require('./rentRouter');

apiRouter.use('/movies', movieRouter);
apiRouter.use('/users', userRouter);
apiRouter.use('/rent', rentRouter);

module.exports = apiRouter;