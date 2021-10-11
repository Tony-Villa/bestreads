const router = require('express').Router();

router.get('/', (req, res) => {
  res.send('Welcome to the Landing Page!');
});

module.exports = router;
