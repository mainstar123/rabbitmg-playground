const sum = require('./sum');

test('add test', () => {
  expect(sum(1, 3)).toBe(4);
});

test('object check', () => {
  expect({ name: 'john' }).toEqual({ name: 'john' });
});
