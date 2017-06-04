const express = require('express');
const consolidate = require('consolidate');
const path = require('path');
const app =  express();

// view engine setup
app.engine('html', consolidate.swig);
app.set('view engine', 'html');

// set static path
app.use(express.static(path.join(__dirname, '')));
app.all('/', (req, res) => {
  res.render('index.html');
});

app.listen(8181, function() {
  console.log('Ballet site is listening on 8181 ');
});