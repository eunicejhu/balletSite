const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const config = {
  devtool: 'inline-source-map',

  entry: [
    'react-hot-loader/patch',
    // activate HMR for React

    // 'webpack/hot/only-dev-server',
    // bundle the client for hot reloading
    // only- means to only hot reload for successful updates

    path.join(__dirname, 'src', 'index.js'),
  ],
  
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: '/',
    // necessary for HMR to know where to load the hot update chunks
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
        devServer: {
          colors: true, 
          historyApiFallback: false,
          inline: true,
          hot: true,
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
    new webpack.HotModuleReplacementPlugin(),
    // enable HMR globally
    new webpack.NamedModulesPlugin(),
    // prints more readable module names in the browser console on HMR updates
  ],
};

module.exports = config;