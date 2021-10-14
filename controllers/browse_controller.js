const router = require('express').Router();
const { Book, Review, User } = require('../models');
const { shuffle } = require('../functions/shuffle');
const { getAverage } = require('../functions/getAverage');

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
    const reviews = await Review.find({ book: req.params.id }).populate('user');

    const ratings = await Review.find({ book: req.params.id });
    const ratingsArr = ratings.map((el) => el.rating);

    const bookAvgRating = getAverage(ratingsArr);

    const context = {
      book: book,
      reviews: reviews,
      bookAvgRating,
    };

    return res.render('browse/show.ejs', context);
  } catch (error) {
    console.log(error);
    req.error = error;
    return next();
  }
});

module.exports = router;
