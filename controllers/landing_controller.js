const router = require('express').Router();
const auth = require('../functions/verifyToken');
const { Book, Review } = require('../models');
const { randomizer } = require('../functions/randomizer');
const { truncate } = require('../functions/truncate');

router.get('/', async (req, res) => {
  try {
    const books = await Book.find({});
    const staffFavs = await Book.find({ isFeatured: true });
    let staffFav = randomizer(staffFavs);

    // Deal with desc length
    const fullBookDesc = staffFav.description;
    const abridgedBookDesc = truncate(fullBookDesc, 255);

    if (req.session.currentUser) {
      const context = {
        user: req.session.currentUser,
        books,
        bookAvgRating: '',
      };

      // console.log(user.name);
      return res.render('loggedIndex.ejs', context);
    } else {
      const notLoggedContex = {
        book: staffFav,
        bookAvgRating: '',
        fullBookDesc,
        abridgedBookDesc,
      };
      res.render('index.ejs', notLoggedContex);
    }
  } catch (err) {
    console.log(err);
  }
});

router.get('/lol', async (req, res) => {
  res.render('lol.ejs');
});

module.exports = router;
