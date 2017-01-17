import React from 'react';
import { shallow } from 'enzyme';
import Yeti from './Yeti';

describe('<Yeti />', () => {
  let props, wrapper

  beforeEach(() => {
    props = {
      yeti: '/path/to/image.jpg',
    };
    wrapper = shallow(<Yeti {...props} />);
  });

  it('should have an `img` element', () => {
    expect(
      wrapper.find('img').length
    ).toBe(1);
  });  

  it('`img` element should have `className`', () => {
    expect(
      wrapper.find('img').hasClass('yeti')
    ).toBe(true);
  });

  it('`img` should have props for `alt`', () => {
    expect(
      wrapper.find('img').props().alt
    ).toBeDefined();
  });  

  it('`img` `alt` should be `Yeti`', () => {
    expect(
      wrapper.find('img').props().alt
    ).toBe('Yeti');
  });   

  it('`img` should have props for `src`', () => {
    expect(
      wrapper.find('img').props().src
    ).toBe(props.yeti);
  });

});
