const mongoose = require('mongoose');

let contactUserSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: Number,
        required: true
    },
    emailSub: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
}, {versionKey: false});

let contactUserModel = mongoose.model('ContactUsers', contactUserSchema);

module.exports = { contactUserModel };