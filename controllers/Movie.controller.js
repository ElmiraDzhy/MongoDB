const {Movie} = require('../models');

module.exports.createOne = async (req, res, next) => {
    try {
        const {body} = req;
        const movieInstance = await Movie.create(body);
        res.status(201).send({data: movieInstance});
    } catch (err) {
        next(err);
    }
}

module.exports.getAll = async (req, res, next) => {
    try{
        const movies  = await Movie.find();
        res.status(200).send({data: movies});
    }catch(err){
        next(err);
    }
}

module.exports.getOne = async (req, res, next) => {
    try{
        const {params: {id}} = req;
        const movieInstance  = await Movie.findById(id);
        res.status(200).send({data: movieInstance});
    }catch(err){
        next(err);
    }
}

module.exports.update = async (req, res, next) => {
    try{
        const {params: {id}, body} = req;
        const updatedMovieInstance  = await Movie.findByIdAndUpdate(id, body, {new: true});
        res.status(200).send({data: updatedMovieInstance});
    }catch(err){
        next(err);
    }
}

module.exports.delete = async (req, res, next) => {
    try{
        const {params: {id}} = req;
        const removedMovieInstance  = await Movie.findByIdAndRemove(id);
        res.status(200).send({data: removedMovieInstance});
    }catch(err){
        next(err);
    }
}
