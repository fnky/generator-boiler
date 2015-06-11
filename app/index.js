'use strict';
var yeoman = require('yeoman-generator');
var normalizeUrl = require('normalize-url');
var humanizeUrl = require('humanize-url');
var _s = require('underscore.string');

function notOptional(msg) {
  return function (val) {
    return val.length > 0 ? true : msg;
  };
}

module.exports = yeoman.generators.Base.extend({
  init: function () {
    var cb = this.async();

    this.prompt([{
      name: 'moduleName',
      message: 'Whats the name of your module?',
      default: this.appname.replace(/\s/g, '-'),
      filter: function (val) {
        return _s.slugify(val);
      }
    }, {
      name: 'moduleDescription',
      message: 'What does your module do?',
      default: ''
    }, {
      type: 'confirm',
      name: 'babel',
      message: 'Would you like to use Babel?',
      default: false
    }, {
      name: 'githubUsername',
      message: 'What is your GitHub username?',
      store: true,
      validate: notOptional('You have to provide a GitHub username')
    }, {
      name: 'website',
      message: 'What is the URL of your website?',
      store: true,
      validate: notOptional('Please specify your website URL'),
      filter: function (val) {
        return normalizeUrl(val);
      }
    }], function (props) {
      this.moduleName = props.moduleName;
      this.moduleDescription = props.moduleDescription;
      this.babel = props.babel;
      this.camelModuleName = _s.camelize(props.moduleName);
      this.githubUsername = props.githubUsername;
      this.name = this.user.git.name();
      this.email = this.user.git.email();
      this.website = props.website;
      this.humanizedWebsite = humanizeUrl(this.website);

      this.template('editorconfig', '.editorconfig');
      this.template('gitattributes', '.gitattributes');
      this.template('gitignore', '.gitignore');
      this.template('eslintrc', '.eslintrc');
      this.template('travis.yml', '.travis.yml');

      if (this.babel) {
        this.template('index.js', 'src/index.js');
      } else {
        this.template('index.js');
      }

      this.template('LICENSE');
      this.template('_package.json', 'package.json');
      this.template('README.md');
      this.template('test/test.js');

      cb();
    }.bind(this));
  },

  install: function () {
    this.installDependencies({ bower: false });
  }
});
