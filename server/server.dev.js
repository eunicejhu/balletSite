import https from 'https';
import express from 'express';
import consolidate from 'consolidate';
import path from 'path';
let  app =  express();
import getDevelopmentCertificate from 'devcert';
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
console.log(getDevelopmentCertificate.default);
getDevelopmentCertificate('balletSite', { installCertutil: true }).then((ssl) => {
  console.log('I\'m here');
  https.createServer(ssl, app).listen(3000);
});