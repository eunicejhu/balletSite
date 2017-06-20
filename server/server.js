require('babel-register')({
  presets: ['es2015'],
});
if (process.env.NODE_ENV !== 'production') {
  require('./server.dev');
} else {
  require('./server.prod');
}
