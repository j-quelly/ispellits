import React from 'react';
import { shallow } from 'enzyme';

import Footer from './Footer';

describe('<Footer />', () => {
  let props, wrapper

  beforeEach(() => {
    props = {
      yeti: '/path/to/image.jpg',
    };
    wrapper = shallow(<Footer {...props} />);
  });

  it('should have an `div` element', () => {
    expect(
      wrapper.find('div').length
    ).toBe(1);
  });

  describe('<div>', () => {
    it('`div` element should render a <Yeti /> component', () => {
      const div = wrapper.find('div');
      expect(
        div.find('Yeti').length
      ).toBe(1);
    });

    describe('<Yeti /> ', () => {
      it('should have props yeti: `/path/to/image.jpg`', () => {
        const div = wrapper.find('div');
        expect(
          div.find('Yeti').props().yeti
        ).toBe(props.yeti);
      });
    });

    it('`div` element should render a <Trees /> component', () => {
      const div = wrapper.find('div');
      expect(
        div.find('Trees').length
      ).toBe(1);
    });    

  });

});
