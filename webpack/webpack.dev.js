const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
// const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');

const config = {
  devtool: 'inline-source-map',
  context: path.resolve(__dirname, '../'),
  entry: {
    app: [
      'react-hot-loader/patch',
      './src/index.js',
    ],
    vendor: [
      'react', 
      'react-dom', 
      'react-google-maps',
      'react-router',
      'react-router-dom',
      'react-share',
      'underscore',
    ],
  },
  output: {
    path: path.join(__dirname, './build'),
    filename: '[name].[hash].js',
    publicPath: '/',
    // necessary for HMR to know where to load the hot update chunks
  },
  resolve: {
    modules: [
      path.resolve('./src'),
      path.resolve('./node_modules'),
    ],
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
    // used to split out our sepcified vendor script
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: Infinity,
      filename: '[name].[hash].js',
    }),
    new webpack.BannerPlugin('Author: ZUOQIN HU'),
    new HtmlWebpackPlugin({
      showErrors: true,
      cache: true,
      template: './src/index.tmpl.html',
      inject: 'body', 
    }),
    // new ScriptExtHtmlWebpackPlugin({defaultAttribute: 'async'}),
    new webpack.HotModuleReplacementPlugin(),
    // enable HMR globally
    new webpack.NamedModulesPlugin(),
    // prints more readable module names in the browser console on HMR updates
    new ExtractTextPlugin('[name].bundle.css'),
  ],
};

module.exports = config;