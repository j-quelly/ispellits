// dependencies
import React from 'react';
import { shallow } from 'enzyme';

// components
import { Lives } from '../Header';

describe('<Lives />', () => {
  let props, wrapper;

  beforeEach(() => {
    props = {
      modal: false,
      lives: 1,
    };
    wrapper = shallow(<Lives {...props} />);
  });

  it('should render the component when modal:false', () => {
    const p = wrapper.find('p');
    expect(
      p.props().className
    ).toBe('lives lives--left');
  });

  it('should hide the component when modal:true', () => {
    props.modal = !props.modal;
    wrapper = shallow(<Lives {...props} />);
    const p = wrapper.find('p');
    expect(
      p.props().className
    ).toBe('hide');
  });

  it('should render the componet and display `Lives: 1` when modal:false', () => {
    expect(
      wrapper.contains(<p className="lives lives--left">
                         Lives:
                         {props.lives}
                       </p>)
    ).toBe(true);
  });

});
