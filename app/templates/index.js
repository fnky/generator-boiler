<% if (!babel) { -%>
'use strict';

<% } -%>
/**
 * <%= moduleDescription %>
 */
<% if (babel) { -%>
export default function <%= camelModuleName %>(opts = {}) {

}
<% } else { -%>
exports = module.exports = function <%= camelModuleName %>(opts) {
  opts = opts || {};
};
<% } -%>
