"use strict";

const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const BUILD_DIR = path.resolve(__dirname, 'public');
const APP_DIR = path.resolve(__dirname, 'app');

//prod minification
const PROD = JSON.parse(process.env.PROD_ENV || '0');

let extractCSS = new ExtractTextPlugin('style.css');
let Uglyfy = new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false }
    });

var config = {
  entry: APP_DIR + '/index.jsx',
  output: {
    path: BUILD_DIR,
    filename: PROD ? 'bundle.min.js' : 'bundle.js'
  },
  watch: true,

  module : {
    loaders : [
      {
        test : /\.jsx?/,
        include : APP_DIR,
        loader : 'babel'
      },
      { 
        test: /\.css$/,
        loader: ExtractTextPlugin.extract("style-loader", "css-loader")
      },
      { 
        test: /\.ttf$/,
        loader: 'file-loader'
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loader: 'file',
      },
    ]
  },

  plugins: PROD ? [
    extractCSS,
    Uglyfy
  ] : [
    extractCSS
  ],

  resolve: {
    extensions: ['', '.js', '.jsx'],
  },

};

module.exports = config;