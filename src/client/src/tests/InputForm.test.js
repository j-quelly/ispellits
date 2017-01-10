// dependencies
import React from 'react';
import { shallow, mount } from 'enzyme';
import { spy } from 'sinon';

// components
import { InputForm } from '../Modal';

describe('<InputForm />', () => {
  let props, wrapper

  beforeEach(() => {
    props = {
      submitForm: () => {
      },
      validationError: false,
    };
    wrapper = shallow(<InputForm {...props} />);
  });

  it('should have a `<form>` element', () => {
    expect(
      wrapper.find('form').length
    ).toBe(1);
  });

  describe('<form />', () => {
    it('`<form>` element should have a onSubmit attribute', () => {
      expect(
        wrapper.props().onSubmit
      ).toBeDefined();
    });

    it('onSubmit attribute should be of type `function`', () => {
      expect(
        typeof wrapper.props().onSubmit === 'function'
      ).toBe(true);
    });

    it('`<form>` element should have an `<input type="text" />` element', () => {
      expect(
        wrapper.find('form').childAt(0).type()
      ).toBe('input');
    });

    describe('<input type="text" />', () => {

      it('`<input>` element should be of type `text`', () => {
        expect(
          wrapper.find('form').childAt(0).props().type
        ).toBe('text');
      });

      it('`<input>` element should have a placeholder attribute with value `Name`', () => {
        expect(
          wrapper.find('form').childAt(0).props().placeholder
        ).toBe('Name');
      });

      // TODO: test ref

    });

    it('`<form>` element should have an `<p>` element', () => {
      expect(
        wrapper.find('form').childAt(1).type()
      ).toBe('p');
    });

    describe('<p>', () => {
      it('`<p>` element should have a className', () => {
        expect(
          wrapper.find('p').hasClass('error')
        ).toBe(true);
      });

      it('`<p>` element should be null when passed validationError: false', () => {
        expect(
          wrapper.text()
        ).toBe('');
      });

      it('`<p>` element should be `Please enter your name` when passed validationError: true', () => {
        props.validationError = true;
        wrapper = shallow(<InputForm {...props} />);
        expect(
          wrapper.text()
        ).toBe('Please enter your name.');
      });

    });

    it('`<form>` element should have an `<input type="submit" />` element', () => {
      expect(
        wrapper.find('form').childAt(2).type()
      ).toBe('input');
    });

    describe('<input type="submit" />', () => {
      it('`<input>` element should be of type `submit`', () => {
        expect(
          wrapper.find('form').childAt(2).props().type
        ).toBe('submit');
      });

      it('`<input />` element should have a className', () => {
        expect(
          wrapper.find('form').childAt(2).hasClass('btn')
        ).toBe(true);
      });

      it('`<input />` element should have a value attribute', () => {
        expect(
          wrapper.find('form').childAt(2).props().value
        ).toBe('Submit');
      });

    });

  });

  describe('the user populates the input field', () => {
    const name = 'Jorlon';
    let input;

    beforeEach(() => {
      wrapper = mount(<InputForm {...props} />);
      input = wrapper.find('input').first();
    });

    it('`<input />` should have a value', () => {
      input.value = name;
      expect(
        input.value
      ).toBe(name);
    });

    it('`<input />` should have no value', () => {
      input.value = null;
      expect(
        input.value
      ).toBe(null);
    });

    // TODO: test submitting the form with and without data
    // TODO: test props after form submit
    // TODO: test state after form submit

  });

});

