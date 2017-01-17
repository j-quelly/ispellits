// dependencies
import React from 'react';
import { shallow } from 'enzyme';

// components
import Key from './Key';

describe('<Key />', () => {
  let props, wrapper

  beforeEach(() => {
    props = {
      id: 0,
      char: 'q',
      used: true,
      handleKeyboardClick: () => {},
      onClick: () => {},
    };
    wrapper = shallow(<Key {...props} />);
  // throw wrapper.debug();
  });

  it('should have two `<span>` elements', () => {
    expect(
      wrapper.find('span').length
    ).toBe(2);
  });

  describe('<span><span>q</span></span>', () => {
    // it('should have props onClick: [function]', () => {
    //   expect(
    //     wrapper.find('span').at(1).props().onClick
    //   ).toBe(props.onClick);
    // });  

    it('should have className `keyboard__key keyboard__key--used` when props used: true', () => {
      expect(
        wrapper.find('span').at(1).props().className
      ).toBe('keyboard__key keyboard__key--used');
    });   

    it('should have className `keyboard__key` when props used: false', () => {
      props.used = !props.used;
      wrapper = shallow(<Key {...props} />);      
      expect(
        wrapper.find('span').at(1).props().className
      ).toBe('keyboard__key');
    });         

    it('should display props char: `q`', () => {
      expect(
        wrapper.find('span').at(1).text()
      ).toBe(props.char);
    });

     it('should display `<br/>` when props char: `-`', () => {
      props.char = '-';
      props.used = !props.used;
      wrapper = shallow(<Key {...props} />);   
      // throw wrapper.debug();   
      expect(
        wrapper.find('span').at(0).find('br').length
      ).toBe(1);
    });
            

  });

});
