const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    require: true,
    unique: true,
  },
  author: {
    type: String,
    require: true,
  },
  genre: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
  coverImg: {
    type: String,
    require: true,
  },
});

const Books = mongoose.model('Books', bookSchema);
module.exports = Books;
