const assert = require('assert');
const greet = require('./main');

assert.strictEqual(greet('world'), 'Hello, world!', 'greet function failed');

console.log('All tests passed!');