const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewSchema = new Schema(
  {
    rating: {
      type: Number,
      min: 0,
      max: 5,
      required: [true, 'Please provide a rating between 0 and 5'],
    },
    comment: {
      type: String,
      required: [true, 'You must provide a reason for your review rating.'],
    },
    book: {
      type: mongoose.Types.ObjectId,
      ref: 'Book',
    },
    user: {
      type: mongoose.Types.ObjectId,
      ref: 'User',
    },
  },
  { timestamps: true }
);

const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;
