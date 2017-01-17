// dependencies
import React from 'react';
import { shallow } from 'enzyme';

// components
import Lives from './Lives';

describe('<Lives />', () => {
  let props, wrapper

  beforeEach(() => {
    props = {
      lives: 1,
    };
    wrapper = shallow(<Lives {...props} />);
  });

  it('should have a `<p>` element', () => {
    expect(
      wrapper.find('p').length
    ).toBe(1);
  });

  it('`<p>` element should have a className', () => {
    expect(
      wrapper.find('p').hasClass('lives lives--left')
    ).toBe(true);
  });

  it('`<p>` element should say `Lives: 1` when passed lives: 1', () => {
    expect(
      wrapper.text()
    ).toEqual('Lives: ' + props.lives);
  });
  
});
