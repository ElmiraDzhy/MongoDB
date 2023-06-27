const express = require('express')
const userRouter = express.Router()
const UserController = require('../controllers/User.controller')

userRouter.post('/', UserController.create);
userRouter.get('/:id', UserController.getOne);
userRouter.get('/', UserController.getAll);
userRouter.patch('/:movieId/:userId', UserController.addFilmToFav);

module.exports = userRouter;