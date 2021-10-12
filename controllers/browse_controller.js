const router = require('express').Router();

router.get('/', async (req, res) => {
  res.render('browse/collection.ejs');
});

module.exports = router;
