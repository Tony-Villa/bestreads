const express = require('express');
const dotenv = require('dotenv');
const methodOverride = require('method-override');
require('dotenv').config();

// Port && init
const PORT = process.env.PORT;
const app = express();

// View Engine
app.set('view engine', 'ejs');
// app.use(express.static('public'));
app.use(express.static(__dirname));

// URL Parser Middleware && Method Overide
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride('_method'));

/* SECTION External modules */
const session = require('express-session');
const MongoStore = require('connect-mongo');

/* SECTION App Config */
app.use(
  session({
    // where to store the sessions in mongodb
    store: MongoStore.create({ mongoUrl: process.env.__MONGO_URI__ }),
    // secret key is used to sign every cookie to say its is valid
    secret: process.env.TOKEN_SECRET,
    resave: false,
    saveUninitialized: false,
    // configure the experation of the cookie
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 7 * 2, // two weeks
    },
  })
);
/* SECTION Middleware */
app.use(function (req, res, next) {
  res.locals.user = req.session.currentUser;
  next();
});

const authRequired = function (req, res, next) {
  if (req.session.currentUser) {
    return next();
  }

  return res.redirect('/login');
};

// Connect to DB
require('./config/db.connection');

// Controllers
const controllers = require('./controllers/');
// Route Middlewares
app.use('/', controllers.landing);
app.use('/browse', controllers.browse);
app.use('/book', controllers.book);
app.use('/user', controllers.user);
app.use('/reviews', authRequired, controllers.review);

// Routes
app.get('/*', (req, res) => {
  const context = { error: req.error };
  return res.status(404).render('404.ejs', context);
});

// Listen
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
