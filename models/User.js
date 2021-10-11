const Schema = require('mongoose').Schema;

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
      default: 'asdasd',
    },
    readChallenge: {
      type: Number,
    },
    reviews: {
      type: mongoose.Types.ObjectID,
      ref: 'Review',
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model('User', userSchema);

module.exports = User;
