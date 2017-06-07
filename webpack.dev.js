const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const config = {
  devtool: 'inline-source-map',
  context: path.resolve(__dirname, 'src'),
  entry: [
    'react-hot-loader/patch',
    // activate HMR for React

    // 'webpack/hot/only-dev-server',
    // bundle the client for hot reloading
    // only- means to only hot reload for successful updates
    './index.js',
  ],
  
  output: {
    path: path.join(__dirname, 'src/build'),
    filename: '[name].bundle.js',
    publicPath: '/',
    // necessary for HMR to know where to load the hot update chunks
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
          use: [
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
            {
              loader: 'stylefmt-loader',
              options: {
                config: '.stylelintrc',
              },
            },
          ],
        }),
      },
    ],
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      options: {
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
    new ExtractTextPlugin('[name].bundle.css'),
  ],
};

module.exports = config;