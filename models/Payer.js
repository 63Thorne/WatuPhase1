const mongoose = require('mongoose');

const PayerSchema = new mongoose.Schema({
    Fullname: {
        type: String,
        required: true
    },

    Surname: {
        type: String,
        required: true
    },

    EmailAddress: {
        type: String,
        required: true
    },

    Cellnumber: {
        type: String,
        required: true

    },

    Institution: {
        type: String,
        required: true

    },

    date: {
        type: Date,
        default: Date.now
    }

});

const Payer = mongoose.model('PayingUser', PayerSchema);

module.exports = Payer;