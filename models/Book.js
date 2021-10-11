const mongoose = require('mongoose');

const BookSchema = new Schema({
    _id: String,
    title: String,
    author: String,
    genre: String, 
    description: String,
    coverImg: String,
});



