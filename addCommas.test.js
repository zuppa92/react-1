const addCommas = require('./addCommas');

test('adds commas to 1234', () => {
  expect(addCommas(1234)).toBe("1,234");
});

test('adds commas to 1000000', () => {
  expect(addCommas(1000000)).toBe("1,000,000");
});

test('adds commas to 9876543210', () => {
  expect(addCommas(9876543210)).toBe("9,876,543,210");
});

test('adds commas to 6', () => {
  expect(addCommas(6)).toBe("6");
});

test('adds commas to -10', () => {
  expect(addCommas(-10)).toBe("-10");
});

test('adds commas to -5678', () => {
  expect(addCommas(-5678)).toBe("-5,678");
});

test('adds commas to 12345.678', () => {
  expect(addCommas(12345.678)).toBe("12,345.678");
});

test('adds commas to -3141592.65', () => {
  expect(addCommas(-3141592.65)).toBe("-3,141,592.65");
});