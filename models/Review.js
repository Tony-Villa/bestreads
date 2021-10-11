const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
    _id: {
        type: String,
        require: true,
    },
   rating: {
        type: String,
        require: true,
    },
    comment: {
        type: String, 
        require: false
    }, 
    book: {
        type: String,
        require: true
    },
    user: {
        type: String,
        require: true
    },
});

const Books = mongoose.model('Books', bookSchema);
module.exports = Books;
