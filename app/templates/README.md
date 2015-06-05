# <%= moduleName %>
[![Build Status](https://travis-ci.org/<%= githubUsername %>/<%= moduleName %>.svg?branch=master)](https://travis-ci.org/<%= githubUsername %>/<%= moduleName %>)
[![NPM version](https://badge.fury.io/js/<%= moduleName %>.svg)](<%= moduleName %>)

<%= moduleDescription %>

## Install

```sh
$ npm install --save <%= moduleName %>
```

## Usage

```js
var <%= camelModuleName %> = require('<%= moduleName %>');

<%= camelModuleName %>();
```

## API

<%= camelModuleName %>(input, [options])

##### input
`string` *Required*

Takes input.

##### options
*`boolean`*  
**Default:** `false`

Takes some options.

## License

[The MIT License](LICENSE) - © [<%= name %>](https://github.com/<%= githubUsername %>)
