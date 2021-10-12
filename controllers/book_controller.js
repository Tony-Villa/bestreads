const router = require('express').Router();

const { Book } = require('../models');

router.get('/', (req, res) => {
  res.render('book/addBook.ejs');
});

router.post('/', async (req, res, next) => {
  try {
    console.log(req.body);
    await Book.create(req.body);
    return res.redirect('/book');
  } catch (err) {
    return console.log(err);
    res.status(400).send(err);
    // return next();
  }
});

module.exports = router;
