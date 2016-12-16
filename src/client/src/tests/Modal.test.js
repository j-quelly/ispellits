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

      },
      handleClick: () => {},
      submitForm: () => {},
      resetGame: () => {},
      validationError: () => {},
    };
    wrapper = shallow(<Modal {...props} />);
  });

  // TODO: everything

});