const mongoose = require('mongoose');

const facultySchema = new mongoose.Schema({
    fname: {
        type:String,
        required: true,
    },
    fbirthDate: {
        type: String,
        required: true,
    },
    femail: {
        type: String,
        required: true,
    },
    position: {
        type: String,
        required: true,
    },
    extension: {
        type: String,
        required: true,
    },
    fphoneNumber: {
        type: String,
        required: true,
    }
});

module.exports = mongoose.model('Faculty', facultySchema);