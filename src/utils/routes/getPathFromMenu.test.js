const getPathFromMenu = require('./getPathFromMenu');

test('the path of \'contact\' is /contact', () => {
  expect(getPathFromMenu('contact')).toBe('/contact');
});

test('the path of \'home\' is /', () => {
  expect(getPathFromMenu('home')).toBe('/');
});
