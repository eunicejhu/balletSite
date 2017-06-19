const express = require('express');
const consolidate = require('consolidate');
const path = require('path');
const app =  express();



// view engine setup
app.engine('html', consolidate.swig);
app.set('view engine', 'html');

// set static path
app.use(express.static(path.join(__dirname, '../src/build/')));
app.all('*', (req, res) => {
  res.render(path.join(__dirname, '../src/build/index.html'));
});

app.all('/', (req, res) => {
  res.render('./index.html');
});

app.listen(3002);