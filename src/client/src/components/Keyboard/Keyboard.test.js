// dependencies
import React from 'react';
import { shallow } from 'enzyme';

// components
import Keyboard from './Keyboard';

describe('<Keyboard />', () => {
  let props, wrapper

  beforeEach(() => {
    props = {
      pool: ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '-', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', '-', 'z', 'x', 'c', 'v', 'b', 'n', 'm'],
      used: ['w'],
      handleKeyboardClick: () => {
      },
    };
    wrapper = shallow(<Keyboard {...props} />);
  // throw wrapper.debug();
  });

  it('should have a `<p>` element', () => {
    expect(
      wrapper.find('p').length
    ).toBe(1);
  });

  it('`<p>` element should have a className `keyboard`', () => {
    expect(
      wrapper.find('p').hasClass('keyboard')
    ).toBe(true);
  });

  it('should render 28 <Key /> components', () => {
    expect(
      wrapper.find('Key').length
    ).toEqual(28);
  });

  describe('<Key />', () => {
    it('should have props id: 0', () => {
      expect(
        wrapper.find('Key').at(0).props().id
      ).toBe(0);
    });

    it('should have props handleKeyboardClick: [function]', () => {
      expect(
        wrapper.find('Key').at(0).props().handleKeyboardClick
      ).toBe(props.handleKeyboardClick);
    });

    it('should have props used: false', () => {
      expect(
        wrapper.find('Key').at(0).props().used
      ).toBe(false);
    });

    it('should have props used: true', () => {
      expect(
        wrapper.find('Key').at(1).props().used
      ).toBe(true);
    });    

  });

});
