const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const config = {
  entry: [
    path.join(__dirname, 'src', 'index.js'),
  ],
  
  output: {
    path: path.join(__dirname, '/src/dist'),
    filename: 'prod.bundle.js',
    publicPath: '/ballet/',
    sourceMapFilename: 'prod.map',
  },
  module: {
    rules: [
      {
        test: /\.(jpe?g|gif|png|svg|woff|ttf|wav|mp3|mp4)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'assets/',
              publicPath: '/',
            },
          },
        ],
      },
      {
        test: /\.jsx?$/,
        use: ['babel-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use:  [
            {
              loader: 'css-loader',
              options: {
                module: true,
                importLoaders: 1,
                localIdentName: '[path][name]__[local]--[hash:base64:5]',
              },
            },
            {
              loader: 'postcss-loader',
            },
          ],
        }),
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
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
    new ExtractTextPlugin('[name].bundle.css'),
  ],
};

module.exports = config;