const {Movie} = require('../models');

module.exports.createOne = async (req, res, next) => {
    try {
        const {body} = req;
        const movieInstance = await Movie.create(body);
        res.status(201).send(movieInstance);
    } catch (err) {
        next(err);
    }
}

module.exports.getAll = async (req, res, next) => {
    console.log('here')
    try{
        const movies  = await Movie.find();
        res.status(200).send(movies);
    }catch(err){
        next(err);
    }
}
// module.exports.createOne = async (req, res, next) => {}
// module.exports.createOne = async (req, res, next) => {}
// module.exports.createOne = async (req, res, next) => {}
// module.exports.createOne = async (req, res, next) => {}
// module.exports.createOne = async (req, res, next) => {}
// module.exports.createOne = async (req, res, next) => {}
// module.exports.createOne = async (req, res, next) => {}
// module.exports.createOne = async (req, res, next) => {}
// module.exports.createOne = async (req, res, next) => {}
// module.exports.createOne = async (req, res, next) => {}
