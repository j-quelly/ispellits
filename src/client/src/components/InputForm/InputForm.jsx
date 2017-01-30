import React, { Component } from 'react';
import './InputForm.css';
import store from '../../store/configureStore.js';

class InputForm extends Component {
  constructor(props) {
    super(props);

    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.validate = this.validate.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
  }

  componentDidMount() {
    // subscribe to the store
    store.subscribe(() => this.forceUpdate());
  }

  onInputChange(e) {
    const newFields = {};
    newFields[e.target.name] = e.target.value;

    // dispatch to the store
    store.dispatch({
      type: 'HIGH_SCORE_FORM_FIELD_INPUT',
      payload: newFields
    });
  }

  validate(formData) {
    /* Note: In this case it also seems unnecessary to avoid mutating the object 
       as this method only returns a value and does nothing else. */
    const errors = {};
    if (!formData.name || formData.name === '' || formData.name === null) {
      errors.name = 'Please enter your name.';
    }
    return errors;
  }

  onFormSubmit(e) {
    e.preventDefault();
    const formData = store.getState().fields;
    const fieldErrors = this.validate(formData);

    // dispatch to the store
    store.dispatch({
      type: 'HIGH_SCORE_FORM_FIELD_ERROR',
      payload: fieldErrors,
    });

    if (Object.keys(fieldErrors).length) return;

    const name = store.getState().fields.name;
    this.props.handleFormSubmit(name);

    // dispatch to the store
    store.dispatch({
      type: 'HIGH_SCORE_FORM_RESET',
      payload: {}
    });

  }

  render() {
    return (
      <form onSubmit={(e) => this.onFormSubmit(e)}>
        <input
          type="text"
          placeholder="Name"
          value={store.getState().fields.name || ''}
          name="name"
          onChange={(e) => this.onInputChange(e)}
        />
        <p className="error">
          {store.getState().fieldErrors.name}
        </p>
        <input
          type="submit"
          className="btn"
          value="Submit"
        />
      </form>
      );
  }
}
InputForm.propTypes = {
  handleFormSubmit: React.PropTypes.func.isRequired,
};

export default InputForm;
