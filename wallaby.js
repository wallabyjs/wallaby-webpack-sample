'use strict';

var babel = require('babel-core');
var wallabyWebpack = require('wallaby-webpack');

var webpackPostprocessor = wallabyWebpack({});

module.exports = function (wallaby) {

  return {
    files: [
      { pattern: 'src/*.js', load: false }
    ],

    tests: [
      { pattern: 'test/*Spec.js', load: false }
    ],

    compilers: {
      '**/*.js': wallaby.compilers.babel({ babel: babel, presets: ['es2015'] })
    },

    postprocessor: webpackPostprocessor,

    bootstrap: function () {
      window.__moduleBundler.loadTests();
    }
  };
};
