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

// edit route
router.get('/:reviewId/edit', async (req, res) => {
  try {
    const review = await Review.findById(req.params.reviewId);

    return res.render('reviews/edit.ejs', { review: review });
  } catch {
    if (error) return console.log(error);
  }
});
