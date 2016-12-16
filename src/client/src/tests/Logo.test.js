// dependencies
import React from 'react';
import { shallow } from 'enzyme';

// components
import { Logo } from '../Header';

describe('<Logo />', () => {
  let props, wrapper

  beforeEach(() => {
    props = {
      logo: '/path/to/image.jpg',
    };
    wrapper = shallow(<Logo {...props} />);
  });

  it('should have an `img` element', () => {
    expect(
      wrapper.find('img').length
    ).toBe(1);
  });  

  it('`img` element should have `className`', () => {
    expect(
      wrapper.find('img').hasClass('logo logo--xs')
    ).toBe(true);
  });

  it('`img` should have props for `alt`', () => {
    expect(
      wrapper.find('img').props().alt
    ).toBeDefined();
  });  

  it('`img` should have props for `src`', () => {
    expect(
      wrapper.find('img').props().src
    ).toBe(props.logo);
  });

});
