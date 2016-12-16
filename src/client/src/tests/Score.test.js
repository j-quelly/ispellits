// dependencies
import React from 'react';
import { shallow } from 'enzyme';

// components
import { Score } from '../Header';

describe('<Score />', () => {
  let props, wrapper;

  beforeEach(() => {
    props = {
      text: '',
    };
    wrapper = shallow(<Score {...props} />);
  });

  it('should contain a `<p>` element', () => {
    expect(
      wrapper.find('p').length
    ).toBe(1);
  });

  it('`<p>` element className should default to `score score--right` when no styles passed', () => {
    expect(
      wrapper.find('p').hasClass('score score--right')
    ).toBe(true)
  });

  it('`<p>` element className should be `modal__body` when styles: "modal__body"', () => {
    props.styles = 'modal__body';
    wrapper = shallow(<Score {...props} />);
    expect(
      wrapper.find('p').hasClass(props.styles)
    ).toBe(true)
  });

  it('`<p>` element score should default to 0 when no score passed', () => {
    expect(
      wrapper.text()
    ).toEqual('0 pts');
  });

  it('`<p>` element score should be `40` when score: 40', () => {
    props.score = 40;
    wrapper = shallow(<Score {...props} />);
    expect(
      wrapper.text()
    ).toEqual(`${props.score} pts`);
  });

  it('`<p>` element should have NO text when no text passed', () => {
    expect(
      wrapper.text()
    ).toEqual('0 pts');
  });

  it('`<p>` element should have text when text passed', () => {
    props.text = 'Round Score: ';
    wrapper = shallow(<Score {...props} />);
    expect(
      wrapper.text()
    ).toEqual(`${props.text}0 pts`);
  });

  it('`<p>` element should have text and score when text and score passed', () => {
    props.text = 'Round Score: ';
    props.score = 40;
    wrapper = shallow(<Score {...props} />);
    expect(
      wrapper.text()
    ).toEqual(`${props.text}${props.score} pts`);
  });  

});