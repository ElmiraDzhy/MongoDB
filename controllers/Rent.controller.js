const {Rent, User} = require('../models');

module.exports.getMovie = async (req, res, next) => {
    try {
        const {body: {movieId, userId}} = req;
        const rent = await Rent.create({movie: movieId, user: userId});
        res.status(200).send({data: rent});
    } catch (err) {

    }
}

module.exports.reviewRent = async (req, res, next) => {
    try {

    } catch (err) {

    }
}
module.exports.returnMovie = async (req, res, next) => {
    try {

    } catch (err) {

    }
}
module.exports.reviewAll = async (req, res, next) => {
    try {

    } catch (err) {

    }
}



