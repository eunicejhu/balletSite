const getPathFromTabName = require('./getPathFromTabName');

test('the path of \'contact\' is /contact', () => {
  expect(getPathFromTabName('contact')).toBe('/contact');
});

test('the path of \'home\' is /', () => {
  expect(getPathFromTabName('home')).toBe('/');
});
