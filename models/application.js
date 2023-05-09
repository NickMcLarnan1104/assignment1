const mongoose = require('mongoose');

const applicationSchema = new mongoose.Schema({
    status: {
        type: String,
        required: true,
    },
    cost: {
        type: String,
        required: true,
    }
});

module.exports = mongoose.model('Application', applicationSchema);