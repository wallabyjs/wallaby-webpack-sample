const wallabyWebpack = require('wallaby-webpack');
const webpackPostprocessor = wallabyWebpack({});

module.exports = function (wallaby) {

  return {
    files: [
      // loading chai globally
      { pattern: 'node_modules/chai/chai.js', instrument: false },
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
      window.expect = chai.expect;
      window.__moduleBundler.loadTests();
    }
  };
};
