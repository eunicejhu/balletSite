const express = require('express');
const consolidate = require('consolidate');
const app =  express();



// view engine setup
app.engine('html', consolidate.swig);
app.set('view engine', 'html');

// set static path
app.use(express.static('views'));
app.all('/', (req, res) => {
  res.render('index.html');
});
// app.render('index', (error, html) => {
//     console.log(error, html)
// })

app.listen(3002);