// dependencies
import React from 'react';
import { shallow } from 'enzyme';

// components
import { Btn } from '../Modal';

describe('<Btn />', () => {
  let props, wrapper;

  beforeEach(() => {
    props = {
      btnText: 'Click Me',
      handleClick: () => {},
    };
    wrapper = shallow(<Btn {...props} />);
  });

  it('should contain a `<button>` element', () => {
    expect(
      wrapper.find('button').length
    ).toBe(1);
  });  

  it('`<button>` element className should be `btn`', () => {
    expect(
      wrapper.find('button').hasClass('btn')
    ).toBe(true)
  });

  it('`<button>` should have an onClick attribute', () => {
    expect(
      wrapper.find('button').props().onClick
    ).toBeDefined()
  });  

  it('`<button>` element should contain text', () => {
    expect(
      wrapper.text()
    ).toEqual(props.btnText);
  });

  // TODO: test handleClick method?
  // TODO: test handleClick event
  // TODO: test props after event
  // TODO: test state after event?

});