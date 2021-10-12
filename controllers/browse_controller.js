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

router.get('/:id', async (req,res, next) => {
  try {
    const books = await Book.findById(req.params.id);
    
    const context = {
      books,
    }
    return res.render('browse/show.ejs',context);
  } catch (error) {
    console.log(error);
    req.error = error;
    return next();

})

module.exports = router;

