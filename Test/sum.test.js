const sum = require('./sum');

test('add test', () => {
  expect(sum(1, 3)).toBe(4);
});
