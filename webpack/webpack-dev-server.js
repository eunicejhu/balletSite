const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const webpackConfig = require('./webpack.config');
const path = require('path');

const env = process.env.NODE_ENV;
const devServerConfg = {
  contentBase: path.join(__dirname, '../'),
  historyApiFallback: {disableDotRule: true},
};

const server = new WebpackDevServer(webpack(webpackConfig(env)), devServerConfg);

server.listen(3000, 'localhost');