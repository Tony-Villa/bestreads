const router = require('express').Router();
const bcrypt = require('bcrypt');
const { User } = require('../models');
const { registerValidation, loginValidation } = require('../functions/validation');

router.get('/register', (req, res) => {
  res.render('user/register.ejs');
});

router.post('/register', async (req, res) => {
  //Validate data
  const { error } = registerValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  // Check if user is already in DB
  const emailExists = await User.findOne({ email: req.body.email });
  if (emailExists) return res.status(400).send('Email already exists');

  // Hash passwords
  const salt = await bcrypt.genSalt(10);
  const hashedPass = await bcrypt.hash(req.body.password, salt);

  // Create mew user
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: hashedPass,
  });

  try {
    const savedUser = await user.save();
    res.redirect('/');
  } catch (err) {
    res.status(400).sent(err);
  }
});

module.exports = router;
