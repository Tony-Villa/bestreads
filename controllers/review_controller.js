const router = require('express').Router();
const { Book, Review, User } = require('../models');

router.get('/', async (req, res) => {
  try {
    const allBooks = await Book.find({});
    const allReviews = await Review.find({});
    const allUsers = await User.find({});

    const context = {
      users: allUsers,
      reviews: allReviews,
      books: allBooks,
    };

    res.send(allReviews);
  } catch (err) {
    console.log(err);
  }
});

// create router
router.post('/', async (req, res, next) => {
  try {
    await Review.create(req.body);
    return res.redirect('back');
  } catch (err) {
    console.log(err);
    return next();
  }
});
