const router = require('express').Router();
const { User } = require('../models');
const { registerValidation, loginValidation } = require('../functions/validation');

router.get('/register', (req, res) => {
  res.render('user/register.ejs');
});

router.post('/register', async (req, res) => {
  //Validate data
  const { error } = registerValidation(req.body);

  if (error) return res.status(400).send(error.details[0].message);

  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  });

  try {
    const savedUser = await user.save();
    res.redirect('/');
  } catch (err) {
    res.status(400).sent(err);
  }
});

module.exports = router;
