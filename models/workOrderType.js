const mongoose = require('mongoose');

const workOrderTypeSchema = new mongoose.Schema({
    propertyDamage: {
        type: String,
        required: false
    },
    applianceDamage: {
        type: String,
        required: false,
    },
    applicanceRelacement: {
        type: String,
        required: false,
    }
});

module.exports = mongoose.model('WorkOrderType', workOrderTypeSchema);