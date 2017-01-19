// dependencies
import React from 'react';
import { shallow } from 'enzyme';
import { spy } from 'sinon';

// components
import Btn from './Btn.jsx';

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

  it('simulates click events', () => {
    const onButtonClick = spy();
    wrapper = shallow(<Btn handleClick={onButtonClick} />);
    wrapper.find('button').simulate('click');
    expect(
      onButtonClick.calledOnce
    ).toBe(true);
  });  

});