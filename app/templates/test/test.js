<% if (babel) { -%>
import test from 'tape';
import <%= camelModuleName -%> from '../src';

<% } else { -%>
'use strict';
var test = require('tape');
var <%= camelModuleName -%> = require('../');

<% } -%>

<% if (babel) { -%>
test('first test', (t) => {
  t.pass('this test passed');
  t.end();
});
<% } else { -%>
test('first test', function (t) {
  t.pass('this test passed');
  t.end();
});
<% } -%>
