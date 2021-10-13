const router = require('express').Router();
const { Book, Review, User } = require('../models');
const { shuffle } = require('../functions/shuffle');

// Browse Route
router.get('/', async (req, res) => {
  try {
    const books = await Book.find({});

    let shuffledBooks = shuffle(books);

    const context = {
      books: shuffledBooks,
    };

    res.render('browse/collection.ejs', context);
  } catch (error) {
    return console.log(error);
  }
});

// Show Route
router.get('/:id', async (req, res, next) => {
  try {
    const book = await Book.findById(req.params.id);
    const reviews = await Review.find({ book: req.params.id });
    const user = await User.find({ user: req.params.id });

    const context = {
      book,
      reviews,
      user,
    };

    return res.render('browse/show.ejs', context);
  } catch (error) {
    console.log(error);
    req.error = error;
    return next();
  }
});

module.exports = router;
