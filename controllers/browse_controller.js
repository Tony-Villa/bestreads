const router = require('express').Router();
const { Book } = require('../models');


router.get('/', async (req, res) => {
 try {
  const books = await Book.find({});
  const context = {
    books,
  };
  res.render('browse/collection.ejs', context);
 } catch (error) {
   return console.log(error);
 }
  
});

module.exports = router;

