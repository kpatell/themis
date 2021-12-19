const mongoose = require('mongoose');

const ElementSchema = mongoose.Schema({
    name: String,
    email: String,
    phone_number: String
}, {
    timestamps: true,
    createdAt: true,
    updatedAt: true
});

module.exports = mongoose.model('Element', ElementSchema);