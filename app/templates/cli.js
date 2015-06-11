<% if (babel) { -%>
<% if (cliModule !== 'none') { -%>
import <%= cliModule %> from '<%= cliModule %>';
<% } -%>
import <%= camelModuleName -%> from './';
<% } else { -%>
<% if (cliModule !== 'none') { -%>
var <%= cliModule %> = require('<%= cliModule %>');
<% } -%>
var <%= camelModuleName -%> = require('./');
<% } -%>
