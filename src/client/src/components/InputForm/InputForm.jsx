import React, { Component } from 'react';

import './InputForm.css';

class InputForm extends Component {
  constructor(props) {
    super(props);

    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.validate = this.validate.bind(this);
    this.onInputChange = this.onInputChange.bind(this);

    this.state = {
      fields: {},
      fieldErrors: {},
    };
  }

  onInputChange(e) {
    /** Note: In a scenario such as this where the data
       strucure is changing with each key stroke, it may 
       okay to mutate the object for the sake of performance.
       The actual performance hit has not been tested in this case. 
    */
    const fields = this.state.fields;
    const newFields = {};
    newFields[e.target.name] = e.target.value;
    this.setState({
      fields: {...fields, ...newFields}
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
    const formData = this.state.fields
    const fieldErrors = this.validate(formData);
    /** Note: Again in this case it's probably okay to mutate the state
        as this only is happening once every time the form is submit. And there is
        only one form in this entire application.  Besides, the state is reset once
        all processing of the data is completed. */
    this.setState({
      fieldErrors
    });

    if (Object.keys(fieldErrors).length) return;

    const name = this.state.fields.name;
    this.props.handleFormSubmit(name);
    this.setState({
      fields: {},
      fieldErrors: {},
    })

  }

  render() {
    return (
      <form onSubmit={(e) => this.onFormSubmit(e)}>
        <input
          type="text"
          placeholder="Name"
          value={this.state.fields.name || ''}
          name="name"
          onChange={(e) => this.onInputChange(e)}
        />
        <p className="error">
          {this.state.fieldErrors.name}
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