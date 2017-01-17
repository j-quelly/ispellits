import React from 'react';
import { shallow } from 'enzyme';

import Trees from './Trees';

describe('<Trees />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Trees />);
  });

  it('should render a `div.forest`', () => {
    expect(
      wrapper.find('div.forest').length
    ).toBe(1)
  });

  it('should render a `div.forest__tree forest__tree--1`', () => {
    expect(
      wrapper.find('div.forest__tree.forest__tree--1').length
    ).toBe(1)
  });

  it('should render a `div.forest__tree.forest__tree--2`', () => {
    expect(
      wrapper.find('div.forest__tree.forest__tree--2').length
    ).toBe(1)
  });

});
