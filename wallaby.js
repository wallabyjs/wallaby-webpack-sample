'use strict';

var wallabyWebpack = require('wallaby-webpack');
var webpackPostprocessor = wallabyWebpack({});

module.exports = function (wallaby) {

  return {
    files: [
      { pattern: 'src/**/*.js', load: false }
    ],

    tests: [
      { pattern: 'test/**/*Spec.js', load: false }
    ],

    compilers: {
      '**/*.js': wallaby.compilers.babel()
    },

    postprocessor: webpackPostprocessor,

    setup: function () {
      window.__moduleBundler.loadTests();
    }
  };
};
