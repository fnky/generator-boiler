'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-generator').test;

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
      moduleName: 'test',
      githubUsername: 'test',
      website: 'test.com'
    });

    this.generator.run(function () {
      assert.file(expected);
      cb();
    });
  });
});
