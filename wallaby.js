var babel = require('babel');
var wallabyWebpack = require('wallaby-webpack');

var webpackPostprocessor = wallabyWebpack({});

module.exports = function () {

  return {
    files: [
      {pattern: 'src/*.js', load: false}
    ],

    tests: [
      {pattern: 'test/*Spec.js', load: false}
    ],

    preprocessors: {
      '**/*.js': file => babel.transform(file.content, { sourceMap: true })
    },

    postprocessor: webpackPostprocessor,

    bootstrap: function () {
      window.__moduleBundler.loadTests();
    }
  };
};