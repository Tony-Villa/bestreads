const Schema = require('mongoose').Schema;

const bookClubSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    comment: {
      type: String,
      required: true,
    },
    book: {
      type: mongoose.Types.ObjectID,
      ref: 'Book',
    },
    user: {
      type: mongoose.Types.ObjectID,
      ref: 'User',
    },
  },
  {
    timestamps: true,
  }
);
