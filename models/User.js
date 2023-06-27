const mongoose = require('mongoose');

const {Schema} = mongoose;

const userSchema = new Schema({
    firstName: {
        type: String,
    },
    lastName: {
        type: String,
    },
    email: {
        type: String,
        required: [true, 'Email is required field for user'],
    },
    gender: {
        type: String,
    },
    favouriteFilms: {
        type: [{type: Schema.Types.ObjectId, ref: 'Movie'}],
    },

});

userSchema.index({favouriteFilms: 1}, {unique: true});

const User = mongoose.model('User', userSchema);

module.exports = User;