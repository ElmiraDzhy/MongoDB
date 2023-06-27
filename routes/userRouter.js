const express = require('express')
const userRouter = express.Router()
const UserController = require('../controllers/User.controller')

userRouter.post('/', UserController.create);
userRouter.get('/:id', UserController.getOne);
userRouter.get('/', UserController.getAll);

module.exports = userRouter;