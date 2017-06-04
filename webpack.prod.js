const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const config = {
  entry: [
    path.join(__dirname, 'src', 'index.js'),
  ],
  
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'prod.bundle.js',
    publicPath: '/ballet/',
    sourceMapFilename: 'prod.map',
  },
  module: {
    rules: [
      {
        test: /\.json$/,
        use: ['json-loader'],
      },
      {
        test: /\.(jpe?g|gif|png|svg|woff|ttf|wav|mp3|mp4)$/,
        use: ['file-loader'],
      },
      {
        test: /\.jsx?$/,
        use: ['babel-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
            // add CSS to the DOM
            options: {
              sourceMap: true,
            },
          },
          {
            loader: 'css-loader',
            options: {
              module: true,
            },
          },
          {
            loader: 'postcss-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      options: {
        postcss: function() {
          return [autoprefixer];
        },
      },
    }),
    new webpack.BannerPlugin('Author: ZUOQIN HU'),
    new HtmlWebpackPlugin({
      showErrors: true,
      cache: true,
      // hash: true,
      // favicon: favicon.ico,
      template: path.join(__dirname, 'src', 'index.tmpl.html'),
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false,
    }),
    new webpack.optimize.UglifyJsPlugin({
      beautify: false,
      mangle: {
        screw_ie8: true,
        keep_fnames: true,
      },
      compress: {
        screw_ie8: true,
      },
      comments: false,
    }),
  ],
};

module.exports = config;