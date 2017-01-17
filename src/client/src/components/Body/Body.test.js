// dependencies
import React from 'react';
import { shallow } from 'enzyme';

// components
import Body from './Body';

describe('<Body />', () => {
  let props, wrapper;

  beforeEach(() => {
    props = {
      modal: true,
      handleClick: () => {
      },
      handleStartGame: () => {
      },
      submitForm: () => {
      },
      resetGame: () => {
      },
    };
    wrapper = shallow(<Body {...props} />);
  });

  it('should render the <Modal /> component when modal:true', () => {
    expect(
      wrapper.find('Modal').length
    ).toBe(1);
  });

  it('should render the <Engine /> component when modal:false', () => {
    props.modal = !props.modal;
    wrapper = shallow(<Body {...props} />);
    expect(
      wrapper.find('Engine').length
    ).toBe(1);
  });

});