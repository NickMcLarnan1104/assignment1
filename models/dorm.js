const mongoose = require('mongoose');

const dormSchema = new mongoose.Schema({
    daddress: {
        type: String,
        required: true,
    },
    dprice: {
        type: String,
        required: true,
    }

})

module.exports = mongoose.model('Dorm', dormSchema);