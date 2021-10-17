const router = require('express').Router();
const { Book, Review, User } = require('../models');

// create route
router.post('/', async (req, res, next) => {
  try {
    const review = {
      ...req.body,
      user: req.session.currentUser.id,
    };

    await Review.create(review);

    return res.redirect('back');
  } catch (err) {
    res.status(400).send(err.message);
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

// update controller
router.put('/:reviewId', async (req, res) => {
  try {
    const review = await Review.findById(req.params.reviewId);

    const bookid = review.book;

    await Review.findByIdAndUpdate(
      req.params.reviewId,
      {
        $set: req.body,
      },
      {
        new: true,
      }
    );

    console.log(req.body);

    return res.redirect(`/browse/${bookid}`);
  } catch (error) {
    return console.log(error);
  }
});

// delete controller
router.delete('/:id', async (req, res, next) => {
  try {
    await Review.findByIdAndDelete(req.params.id);
    return res.redirect('back');
  } catch (error) {
    console.log(error);
    req.error = error;
    return next();
  }
});

module.exports = router;
