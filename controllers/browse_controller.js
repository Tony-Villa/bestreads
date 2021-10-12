const router = require('express').Router();

router.get('/', async (req, res) => {
  res.send('Howdy');
});

module.exports = router;
