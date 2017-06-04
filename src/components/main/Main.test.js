import React from 'react';
import { shallow } from 'enzyme';
import Main from './Main';

const props = {};
const MainWrapper = shallow(<Main {...props} />);


describe('Render Main Component', () => {
  test('Main Component contains a Switch', () => {
    expect(MainWrapper.find('Switch').length).toBe(1);
  });
  test('Main Component contains 3 routes', () => {
    expect(MainWrapper.find('Route').length).toBe(3);
  });
});