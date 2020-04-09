const { Schema, model } = require('mongoose');

const BookSchema = new Schema({
    bookImage: {
        type: String,
        required: true,
    },
    nameBook: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,  
    },
    condiction: {
        type: String,
        required: true,
    },
    autor: {
        type: Date,
        required: true,
    },
    editora: {
        type: String,
        required: true,
    },

}, {
    timestamps: true,
});


module.exports = model('Book', BookSchema);