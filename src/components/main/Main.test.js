import React from 'react';
import { shallow } from 'enzyme';
import Main from './Main';

const props = {};
const MainWrapper = shallow(<Main {...props} />);
const routes = [
  '/',
  '/inscription', 
  '/events', 
  '/equipements', 
  '/contact',
];

describe('Render Main Component', () => {
  test('Main Component contains a Switch', () => {
    expect(MainWrapper.find('Switch').length).toBe(1);
  });
  test('Main Component contains 5 routes', () => {
    expect(MainWrapper.find('Route').length).toBe(5);
  });
  routes.forEach(route => {
    test(`Main Component renders ${route}`, () => {
      expect(MainWrapper.find(`Route[path="${route}"]`).length).toBe(1);
    });
  });
});