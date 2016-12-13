// dependencies
import React from 'react';
import { shallow } from 'enzyme';

// components
import { Logo } from '../Header';

describe('<Logo />', () => {
  let props, wrapper

  beforeEach(() => {
    props = {
      modal: true,
      logo: '/path/to/image.jpg',
    };
    wrapper = shallow(<Logo {...props} />);
  });

  it('should render the component when modal:true', () => {
    expect(
      wrapper.containsMatchingElement(
        <div>
          <img alt="I-Spell-Its logo" />
        </div>
      )
    ).toBe(true);
  });

  it('should hide the component when modal:false', () => {
    props.modal = !props.modal;
    wrapper = shallow(<Logo {...props} />);
    expect(
      wrapper.find('img').props().className
    ).toBe('hide');
  });

  it('should render the image passed as props', () => {
    const img = wrapper.find('img');
    expect(
      img.props().src
    ).toBe(props.logo);
  });

});
