const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    require: true,
    unique: true,
    text: true,
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
  isFeatured: {
    type: Boolean,
    default: false,
  },
  // reviews: [
  //   {
  //     type: mongoose.Types.ObjectId,
  //     ref: 'Review',
  //   },
  // ],
});

const Book = mongoose.model('Book', bookSchema);
module.exports = Book;
