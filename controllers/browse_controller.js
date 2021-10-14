const router = require('express').Router();
const { Book, Review, User } = require('../models');
const { shuffle } = require('../functions/shuffle');
const { getAverage } = require('../functions/getAverage');
const { randomizer } = require('../functions/randomizer');
const { findGenre } = require('../functions/findGenre');
const { truncate } = require('../functions/truncate');

// Browse Route
router.get('/', async (req, res) => {
  try {
    let queryObj = {};

    if (req.query.genre) {
      queryObj = req.query;
    }

    const books = await Book.find(queryObj);

    const findFav = (arr) => {
      const featured = arr.map((el) => {
        if (el.isFeatured) {
          return el;
        } else {
          return;
        }
      });
      return featured;
    };

    const staffFavs = books.filter((book) => book.isFeatured);

    let shuffledBooks = shuffle(books);
    let staffFav = randomizer(staffFavs);
    let genres = findGenre(books);

    // Deal with desc length
    const fullBookDesc = staffFav.description;
    const abridgedBookDesc = truncate(fullBookDesc, 255);

    const context = {
      books: shuffledBooks,
      book: staffFav,
      bookAvgRating: '',
      genres,
      fullBookDesc,
      abridgedBookDesc,
    };

    res.render('browse/collection.ejs', context);
  } catch (error) {
    return console.log(error);
  }
});

router.post('/search', async (req, res, next) => {
  try {
    const foundBook = await Book.findOne({ title: req.body.q });

    res.redirect(`/browse/${foundBook._id}`);
  } catch (err) {
    console.log(err);
  }
});

// Show Route
router.get('/:id', async (req, res, next) => {
  try {
    const book = await Book.findById(req.params.id);
    const reviews = await Review.find({ book: req.params.id }).populate('user');

    // Deal with average rating
    const ratings = await Review.find({ book: req.params.id });
    const ratingsArr = ratings.map((el) => el.rating);
    const bookAvgRating = getAverage(ratingsArr);

    // Deal with description
    const fullBookDesc = book.description;
    const abridgedBookDesc = truncate(fullBookDesc, 255);

    const context = {
      book: book,
      reviews: reviews,
      bookAvgRating,
      fullBookDesc,
      abridgedBookDesc,
    };

    return res.render('browse/show.ejs', context);
  } catch (error) {
    console.log(error);
    req.error = error;
    return next();
  }
});

module.exports = router;
