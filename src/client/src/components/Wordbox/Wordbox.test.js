import React from 'react';
import { shallow } from 'enzyme';

import Wordbox from './Wordbox';

describe('<Wordbox />', () => {
  let props, wrapper;

  beforeEach(() => {
    props = {
      word: 'word',
      correct: [],
    };
    wrapper = shallow(<Wordbox {...props} />);
  });

  it('should contain a `div`', () => {
    expect(
      wrapper.find('div').length
    ).toBe(1)
  });

  describe('`<div>`', () => {
    it('`div` element should have a `className`', () => {
      expect(
        wrapper.find('div').hasClass('wb')
      ).toBe(true);
    });
  });

  it('should render a `<Letter />` component for every letter in props.word', () => {
    expect(
      wrapper.find('Letter').length
    ).toBe(4);
  });

});
