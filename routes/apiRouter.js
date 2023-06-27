const express = require('express');
const apiRouter = express.Router();
const movieRouter = require('./movieRouter');
const userRouter = require('./userRouter');

apiRouter.use('/movies', movieRouter);
apiRouter.use('/users', userRouter);

module.exports = apiRouter;