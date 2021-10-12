const router = require('express').Router();

const { Books } = require('../models');

router.get('/', async (req, res) => {
  res.send('hi');
});

module.exports = router;
