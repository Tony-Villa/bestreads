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

// Connect to DB
require('./config/db.connection');

// Controllers
const controllers = require('./controllers/');
// Route Middlewares
app.use('/', controllers.landing);
app.use('/browse', controllers.browse);
app.use('/book', controllers.book);

// Routes




// ==404==
app.get('/*', (req, res) => {
  const context = {error: req.error};
  return res.status(404).render('404', context);
})
// Listen
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
