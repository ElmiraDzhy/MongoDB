const mongoose = require('mongoose');

const {Schema} = mongoose;

const movieSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name is required field fro movie']
    },
    genre: [String],
    director: String,
    studio: String,
    production: {
        type: Date,
        required: true
    },
    duration: {
        type: Number,
        validate: {
            validator: v => v > 0
        }
    },
    actors: [String],
    rating: {
        type: Number,
        min: [0, `Russian films banned`],
        max: 10
    },
});

const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;