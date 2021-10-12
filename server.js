const express = require('express');
const dotenv = require('dotenv');
const methodOverride = require('method-override');
require('dotenv').config();

// Port && init
const PORT = process.env.PORT;
const app = express();

// Connect to DB
require('./config/db.connection');

// View Engine
app.set('view engine', 'ejs');

// URL Parser Middleware && Method Overide
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride('_method'));

// Controllers
const controllers = require('./controllers/');
// Route Middlewares
app.use('/', controllers.landing);
app.use('/browse', controllers.browse);
app.use('/book', controllers.book);

// Listen
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
