// dependencies
import React from 'react';
import { shallow } from 'enzyme';

// components
import Modal from '../Modal';

describe('<Modal />', () => {
  let props, wrapper;

  beforeEach(() => {
    props = {
      state: {
        modal: true, 
        startScreen: true, 
        scoreScreen: false,
        inputScreen: false, 
        highScoreScreen: false, 
      },
      handleClick: () => {},
      submitForm: () => {},
      resetGame: () => {},
      validationError: () => {},
    };
    wrapper = shallow(<Modal {...props} />);
  });

  it('should render the <Modal /> component when modal:true and startScreen: true', () => {
    throw wrapper.debug();
    expect(
      wrapper.find('Modal').length
    ).toBe(1);
  });

});