const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    name:{
        type:String,
        required: true,
    },
    birthDate:{
        type: String,
        required: true,
    },
    gender: {
        type: String,
        required: true,
    },
    classes: {
        type: [String],
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    phoneNumber: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    }
})
module.exports = mongoose.model('Student', studentSchema);
 