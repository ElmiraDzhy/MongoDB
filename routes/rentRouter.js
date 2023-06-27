const express = require('express');
const rentRouter = express.Router();
const RentController = require('../controllers/Rent.controller');

rentRouter.post('/', RentController.getMovie);
rentRouter.get('/:id', RentController.reviewRent);
rentRouter.get('/all', RentController.reviewAll);
rentRouter.put('/:id', RentController.returnMovie);

module.exports = rentRouter;