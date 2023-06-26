const {User} = require('../models');

module.exports.create = async (req, res, next) => {
    try {
        const {body} = req;
        const userInstance = await User.create(body);
        res.status(201).send({data: userInstance});
    } catch (err) {
        next(err)
    }
}

module.exports.getOne = async (req, res, next) => {
    try {
        const {params: {id}} = req;
        const foundUser = await User.findById(id).populate('favouriteFilms');
        res.status(200).send({data: foundUser});
    } catch (err) {
        next(err);
    }

}

module.exports.getAll = async(req, res, next) => {
    try {
        const users = await User.find().populate('favouriteFilms');
        res.status(200).send({data: users});
    } catch (err) {
        next(err);
    }
}

// module.exports.create = async(req, res, next) => {
//
// }
// module.exports.create = async(req, res, next) => {
//
// }
// module.exports.create = async(req, res, next) => {
//
// }