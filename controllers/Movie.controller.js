const {Movie, User} = require('../models');

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
    try {
        const movies = await Movie.find();
        res.status(200).send({data: movies});
    } catch (err) {
        next(err);
    }
}

module.exports.getOne = async (req, res, next) => {
    try {
        const {params: {id}} = req;
        const movieInstance = await Movie.findById(id);
        res.status(200).send({data: movieInstance});
    } catch (err) {
        next(err);
    }
}

module.exports.update = async (req, res, next) => {
    try {
        const {params: {id}, body} = req;
        const updatedMovieInstance = await Movie.findByIdAndUpdate(id, body, {new: true});
        res.status(200).send({data: updatedMovieInstance});
    } catch (err) {
        next(err);
    }
}

module.exports.delete = async (req, res, next) => {
    try {
        const {params: {id}} = req;
        const removedMovieInstance = await Movie.findByIdAndRemove(id);
        res.status(200).send({data: removedMovieInstance});
    } catch (err) {
        next(err);
    }
}

module.exports.getSearchOne = async (req, res, next) => {
    try {
        const {query} = req;
        const movieInstance = await Movie.findOne({...query});
        res.status(200).send({data: movieInstance});
    } catch (err) {
        next(err);
    }
}

module.exports.getSearchAll = async (req, res, next) => {
    try {
        const {query} = req;
        const movieInstance = await Movie.find({...query});
        res.status(200).send({data: movieInstance});
    } catch (err) {
        next(err);
    }
}
module.exports.getUsersLikedFilm = async (req, res, next) => {
    try {
        const {params: {id}} = req;
        const movie = await Movie.aggregate().lookup({
            from: 'users',
            localField: '_id',
            foreignField: 'favouriteFilms',
            as: 'fans'
        });

        res.status(200).send({data: movie});
    } catch (err) {
        next(err);
    }
}
