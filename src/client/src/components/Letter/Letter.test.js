// dependencies
import React from 'react';
import { shallow } from 'enzyme';

// components
import Letter from './Letter';

describe('<Letter />', () => {
  let props, wrapper

  beforeEach(() => {
    props = {
      char: 'a',
      found: true,
    };
    wrapper = shallow(<Letter {...props} />);
  });

  it('should have a `<p>` element', () => {
    expect(
      wrapper.find('p').length
    ).toBe(1);
  });

  it('`<p>` element should have a className', () => {
    expect(
      wrapper.find('p').hasClass('wb__letter')
    ).toBe(true);
  });

  it('`<p>` element should display a character when found: true and char: `a`', () => {
    expect(
      wrapper.find('p').text()
    ).toEqual(props.char);
  });

  it('`<p>` element should display a `_` when found: false', () => {
    props.found = !props.found;
    wrapper = shallow(<Letter {...props} />);
    expect(
      wrapper.find('p').text()
    ).toEqual('_');
  });  
  
});
