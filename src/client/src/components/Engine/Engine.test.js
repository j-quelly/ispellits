// dependencies
import React from 'react';
import { shallow } from 'enzyme';

// components
import Engine from './Engine';

describe('<Engine />', () => {
  let props, wrapper;

  beforeEach(() => {
    props = {
      clue: 'string',
      word: 'string',
      correct: ['s'],
      pool: ['q'],
      input: ['q'],
      handleKeyboardClick: () => {
      },
    };
    wrapper = shallow(<Engine {...props} />);
  });

  it('should have a <div> element', () => {
    expect(
      wrapper.find('div').length
    ).toBe(1);
  });

  describe('<Clue />', () => {
    it('should render the <Clue /> component', () => {
      expect(
        wrapper.find('Clue').length
      ).toBe(1);
    });

    it('should pass props clue: `string`', () => {
      expect(wrapper.find('Clue').props().clue).toBe(props.clue)
    });

  });

  describe('<Wordbox />', () => {
    it('should render the <Wordbox /> component', () => {
      expect(
        wrapper.find('Wordbox').length
      ).toBe(1);
    });

    it('should pass props word: `string`', () => {
      expect(wrapper.find('Wordbox').props().word).toBe(props.word)
    });

    it('should pass props correct', () => {
      expect(wrapper.find('Wordbox').props().correct).toBe(props.correct)
    });

  });

  describe('<Keyboard />', () => {
    it('should render the <Keyboard /> component', () => {
      expect(
        wrapper.find('Keyboard').length
      ).toBe(1);
    });

    it('should pass props pool', () => {
      expect(wrapper.find('Keyboard').props().pool).toBe(props.pool)
    });

    it('should pass props used', () => {
      expect(wrapper.find('Keyboard').props().used).toBe(props.input)
    });

    it('should pass props handleKeyboardClick', () => {
      expect(wrapper.find('Keyboard').props().handleKeyboardClick).toBe(props.handleKeyboardClick)
    });  
      
  });  

});
