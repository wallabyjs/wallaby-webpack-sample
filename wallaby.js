'use strict';

var wallabyWebpack = require('wallaby-webpack');

var webpackPostprocessor = wallabyWebpack({
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel?presets[]=es2015'
      }
    ]
  }
});

module.exports = function () {

  return {
    files: [
      { pattern: 'src/*.js', load: false }
    ],

    tests: [
      { pattern: 'test/*Spec.js', load: false }
    ],

    postprocessor: webpackPostprocessor,

    bootstrap: function () {
      window.__moduleBundler.loadTests();
    }
  };
};
