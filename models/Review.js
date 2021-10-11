const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
  rating: {
    type: Number,
    min: 0,
    max: 5,
    required: true,
  },
  comment: {
    type: String,
    required: true,
  },
  book: {
    type: mongoose.Types.ObjectId,
    ref: 'Book',
  },
  user: {
    type: mongoose.Types.ObjectId,
    ref: 'User',
  },
});
