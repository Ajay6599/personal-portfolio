require('dotenv').config();

const mongoose = require('mongoose');

let connection = mongoose.connect(process.env.MONGODB_URI);

module.exports = { connection };
