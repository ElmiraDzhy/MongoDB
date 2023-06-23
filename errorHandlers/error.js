const {Error: {ValidationError, CastError}} = require('mongoose');

module.exports.errorHandler = async (err, rea, res, next) => {
    if (err instanceof ValidationError) {
        return res.status(400).send({errors: `Validation failed. Reason: ${err.errors.name}`});
    }
    if (err instanceof CastError && err.kind === 'ObjectId') {
        return res.status(404).send({errors: `Instance not found. Invalid id.`});
    }
    res.status(500).send({errors: 'Unknown error'});
}