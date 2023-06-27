const {addDays} = require('date-fns');
const mongoose = require('mongoose');

const {Schema} = mongoose;

const rentSchema = new Schema({
    movie: {
        type: Schema.Types.ObjectId,
        ref: 'Movie',
        required: [true],
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'Movie',
        required: [true],
    },
    rentDate: {
        type: Date,
        default: new Date(),
    },
    deadline: {
        type: Date,
        default: addDays(new Date(), 10),

    },
    status: {
        type: String,
        enum: ['Taken', 'Returned', 'Failed'],
        default: 'Taken'

    },

});

rentSchema.index({movie: 1, user: 1}, {unique: true});

const Rent = mongoose.model('Rent', rentSchema);

module.exports = Rent;