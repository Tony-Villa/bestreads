const router = require('express').Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const session = require('express-session');
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

//Login
router.get('/login', (req, res) => {
  res.render('user/login.ejs');
});

router.post('/login', async (req, res) => {
  //Validate data
  const { error } = loginValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  // check if username exists
  const user = await User.findOne({ name: req.body.name });
  if (!user) return res.status(400).send('Email or password is wrong');

  //Password is Correct
  const validPass = await bcrypt.compare(req.body.password, user.password);
  if (!validPass) return res.status(400).send('Invalid password');

  //Session
  req.session.currentUser = {
    id: user._id,
    name: user.name,
  };

  console.log(req.session.currentUser.id);

  return res.redirect('/');
});

router.get('/logout', function (req, res) {
  try {
    req.session.destroy();
    console.log(req.session);
    return res.redirect('/');
  } catch (error) {
    console.log(error);
    return res.send(error);
  }
});

module.exports = router;
