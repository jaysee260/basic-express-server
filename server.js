const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Set EJS as the templating engine
app.set('view engine', 'ejs');

// Base route
app.get('/', function(req, res) {
  res.render('home');
});

// Base route
app.get('/about', function(req, res) {
  res.render('about');
});

// Catches and handles non-existing routes
app.get('*', function(req, res) {
  res.render('error');
});

app.listen(PORT, () => {
  console.log(`basic-express-server running on PORT ${PORT}`);
});