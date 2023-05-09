const mongoose = require('mongoose');

const rentSchema = new mongoose.Schema({
    paymentInfo: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Rent', rentSchema);
