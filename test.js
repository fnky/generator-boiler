'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-generator').test;

/**
 * Test suite for node module
 */
describe('boiler:app', function () {
  beforeEach(function (cb) {
    var deps = ['../app'];

    helpers.testDirectory(path.join(__dirname, 'temp'), function (err) {
      if (err) {
        cb(err);
        return;
      }

      this.generator = helpers.createGenerator('boiler:app', deps, null, { skipInstall: true });
      cb();
    }.bind(this));
  });

  it('generates expected files', function (cb) {
    var expected = [
      '.editorconfig',
      '.gitattributes',
      '.gitignore',
      '.eslintrc',
      '.travis.yml',
      'index.js',
      'LICENSE',
      'package.json',
      'README.md',
      'test/test.js'
    ];

    helpers.mockPrompt(this.generator, {
      moduleName: 'testapp',
      moduleDescription: 'test app',
      githubUsername: 'test',
      website: 'test.com',
      babel: false
    });

    this.generator.run(function () {
      assert.file(expected);
      cb();
    });
  });
});

/**
 * Test suite for node module with Babel
 */
describe('boiler:babel', function () {
  beforeEach(function (cb) {
    var deps = ['../app'];

    helpers.testDirectory(path.join(__dirname, 'temp'), function (err) {
      if (err) {
        cb(err);
        return;
      }

      this.generator = helpers.createGenerator('boiler:babel', deps, null, { skipInstall: true });
      cb();
    }.bind(this));
  });

  it('generates expected files', function (cb) {
    var expected = [
      '.editorconfig',
      '.gitattributes',
      '.gitignore',
      '.eslintrc',
      '.travis.yml',
      'src/index.js',
      'LICENSE',
      'package.json',
      'README.md',
      'test/test.js'
    ];

    helpers.mockPrompt(this.generator, {
      moduleName: 'testapp',
      moduleDescription: 'test app',
      githubUsername: 'test',
      website: 'test.com',
      babel: true
    });

    this.generator.run(function () {
      assert.file(expected);
      cb();
    });
  });

});
