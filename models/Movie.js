const mongoose = require('mongoose');

const {Schema} = mongoose;

const movieSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    genre: [String],
    director: String,
    studio: String,
    production: {
        type: Date,
        required: true
    },
    duration: Number,
    actors: [String],
    rating: Number,
});
