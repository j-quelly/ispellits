// dependencies
import React from 'react';
import { shallow } from 'enzyme';

// components
import Clue from './Clue';

describe('<Clue />', () => {
  let props, wrapper

  beforeEach(() => {
    props = {
      clue: 'raging clue',
    };
    wrapper = shallow(<Clue {...props} />);
  });

  it('should have a `<p>` element', () => {
    expect(
      wrapper.find('p').length
    ).toBe(1);
  });

  it('`<p>` element should have a className', () => {
    expect(
      wrapper.find('p').hasClass('clue')
    ).toBe(true);
  });

  it('`<p>` element should display value of props.clue', () => {
    expect(
      wrapper.text()
    ).toEqual(props.clue);
  });
  
});
