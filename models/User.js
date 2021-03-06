const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      min: 6,
      max: 255,
    },
    email: {
      type: String,
      required: true,
      min: 6,
      max: 255,
    },
    password: {
      type: String,
      required: true,
      min: 6,
      max: 1024,
    },
    favBook: {
      type: String,
    },
    image: {
      type: String,
      default: 'https://picsum.photos/200',
    },
    readChallenge: {
      type: Number,
    },
    date: {
      type: Date,
      default: Date.now,
    },
    // reviews: [
    //   {
    //     type: mongoose.Types.ObjectId,
    //     ref: 'Review',
    //   },
    // ],ll
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model('User', userSchema);

module.exports = User;
