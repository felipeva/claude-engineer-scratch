const test = require('node:test');
const assert = require('node:assert/strict');
const { handle } = require('../src/handler');

test('returns 400 for empty input', () => {
  for (const input of [undefined, null, '', '   ', [], {}]) {
    assert.deepEqual(handle(input), { status: 400 }, `input: ${JSON.stringify(input)}`);
  }
});

test('returns 200 for non-empty input', () => {
  for (const input of ['hello', [1], { a: 1 }, 0, false]) {
    assert.deepEqual(handle(input), { status: 200 }, `input: ${JSON.stringify(input)}`);
  }
});
