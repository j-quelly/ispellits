// dependencies
import React from 'react';
import { shallow } from 'enzyme';

// components
import { Score } from '../Header';

describe('<Score />', () => {
  let props, wrapper;

  beforeEach(() => {
    props = {
      modal: false,
      styles: 'modal__body',
      score: 0,
      text: '',
    };
    wrapper = shallow(<Score {...props} />);
  });

  it('should render the component when modal:false', () => {
    props.styles = 'score score--right';
    wrapper = shallow(<Score {...props} />);
    expect(
      wrapper.find('p').props().className
    ).toBe('score score--right');
  });

  it('should hide the component when modal:true', () => {
    props.modal = !props.modal;
    wrapper = shallow(<Score {...props} />);
    expect(
      wrapper.find('p').props().className
    ).toBe('hide');
  });


  it('should allow a score to be passed and render `<p>0 pts</p>', () => {
    expect(
      wrapper.containsMatchingElement(
        <p>
          {props.text}
          {props.score} pts
        </p>
      )
    ).toBe(true);
  });

  it('should allow text to be passed and render `<p>Round Score: 30 pts</p>', () => {
    props.text = 'Round Score:';
    wrapper = shallow(<Score {...props} />);
    expect(
      wrapper.containsMatchingElement(
        <p>
          <strong>{props.text}</strong>
          {props.score} pts
        </p>
      )
    ).toBe(true);
  });

  it('should allow a custom className and render `<p class="modal__body">Total Score: 130 pts</p>', () => {
    props.text = 'Total Score:';
    wrapper = shallow(<Score {...props} />);
    expect(
      wrapper.contains(
        <p className={props.styles}>
          <strong>{props.text}</strong>
          {props.score} pts
        </p>
      )
    ).toBe(true);
  });

});