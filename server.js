const express = require('express');
const dotenv = require('dotenv');
require('dotenv').config();

// Port && init
const PORT = process.env.PORT;
const app = express();

// URL Parser Middleware
app.use(express.urlencoded({ extended: false }));

// Controllers
const controllers = require('./controllers/');
// Route Middlewares
app.use('/', controllers.landing);

// Listen
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
