const {Rent, User} = require('../models');

module.exports.getMovie = async (req, res, next) => {
    try {
        const {body: {movieId, userId}} = req;
        const rent = await Rent.create({movie: movieId, user: userId});
        res.status(200).send({data: rent});
    } catch (err) {
        next(err);

    }
}

module.exports.reviewRent = async (req, res, next) => {
    try {
        const {params: {id}} = req;
        const rentInstance = await Rent.findById(id);
        res.status(200).send({data: rentInstance});
    } catch (err) {
        next(err);

    }
}

module.exports.allUserRents = async (req, res, next) => {
    try {
        const {params: {userId}} = req;
        const userRents = await Rent.find({
            user: userId,
            status: 'Taken'
        });
        res.status(200).send({data: userRents});
    } catch (err) {
        next(err);

    }
}

module.exports.returnMovie = async (req, res, next) => {
    try {
        const {params: {id}} = req;
        const rentStatusChanged = await Rent.findByIdAndUpdate(id, {status: 'Returned'}, {returnDocument: 'after'});
        res.status(200).send({data: rentStatusChanged});
    } catch (err) {
        next(err);
    }
}
module.exports.reviewAll = async (req, res, next) => {
    try {
        const rents = await Rent.find();
        res.status(200).send({data: rents});
    } catch (err) {
        next(err);
    }
}



