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
    throw wrapper.debug();
  });

  // it('should render the <Modal /> component when modal:true and startScreen: true', () => {
    
  //   expect(
  //     wrapper.find('ModalBody').length
  //   ).toBe(1);
  // });

});