const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookClubSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    comment: [
      {
        type: String,
        required: true,
      },
    ],
    book: {
      type: mongoose.Types.ObjectId,
      ref: 'Book',
    },
    user: [
      {
        type: mongoose.Types.ObjectId,
        ref: 'User',
      },
    ],
  },
  {
    timestamps: true,
  }
);
