import React, { Component } from 'react';
import { Score } from './Header';

import './css/Modal.css';

const Modal = function(props) {
  if (props.startScreen) {
    return (<ModalBody>
              <Btn handleClick={props.handleStartGame} btnText="Start" />
            </ModalBody>);
  } else if (props.scoreScreen) {
    return (<ModalBody title="Good Job!" body="You're doing great, keep it up.">
              <Score
                styles="modal__body"
                score={props.roundScore}
                text="Round Score: "
              />
              <Score
                styles="modal__body"
                score={props.totalScore}
                text="Total Score: "
              />
              <Btn handleClick={props.handleStartGame} btnText="Next Word" />
            </ModalBody>);
  } else if (props.inputScreen) {
    return (<ModalBody title={props.title} body="Input your name to enter the hall of fame.">
              <InputForm
                submitForm={props.submitForm}
                handleNameChange={props.handleNameChange}
                handleFormSubmit={props.handleFormSubmit}
              />
            </ModalBody>);
  } else if (props.highScoreScreen) {
    return (<ModalBody
              title="Hall of Fame"
              body=""
              highScores={props.highScores}
            >
              <Btn handleClick={props.resetGame} btnText="Play again" />
            </ModalBody>);
  }
};

const ModalBody = function(props) {
  const scores = (props.highScores ? props.highScores.map((player) => {
    return (
      <li className="scores__player" key={player._id}>
        {player.name}<span className="scores__score">{player.score} pts</span>
      </li>
      );
  }) : '');
  const highScores = (props.highScores ? <ol className="scores">
                                           {scores}
                                         </ol> : '');
  return (
    <div className="modal">
      <h1 className="modal__title">{props.title}</h1>
      <p className="modal__body">
        {props.body}
      </p>
      {highScores}
      {props.children}
    </div>
    );
};
ModalBody.propTypes = {
  title: React.PropTypes.string.isRequired,
  body: React.PropTypes.string.isRequired,
  btnText: React.PropTypes.string.isRequired,
};
ModalBody.defaultProps = {
  title: 'Game Rules',
  body: 'Try and guess the word based on the given clue. Guess incorrectly and lose a life. Run out of lives and the game ends. New lives are rewarded for every 100 points you accumulate.',
  btnText: 'Start',
};

class Btn extends Component {
  handleClick() {
    this.props.handleClick();
  }

  render() {
    return (
      <button className="btn" onClick={() => this.handleClick()}>
        {this.props.btnText}
      </button>
      );
  }
}
Btn.propTypes = {
  btnText: React.PropTypes.string.isRequired,
  handleClick: React.PropTypes.func.isRequired,
};
Btn.defaultProps = {
  btnText: 'Click Me',
};

class InputForm extends Component {
  constructor(props) {
    super(props);

    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.validate = this.validate.bind(this);
    this.onInputChange = this.onInputChange.bind(this);

    this.state = {
      fields: {},
      fieldErrors: {},
      validationError: false,
    };
  }

  onInputChange(e) {
    const fields = this.state.fields;
    fields[e.target.name] = e.target.value;
    this.setState({
      fields,
    });
  }

  validate(formData) {
    const errors = {};
    if (!formData.name) {
      errors.name = 'Please enter your name.';
    }
    return errors;
  }

  onFormSubmit(e) {
    e.preventDefault();
    const formData = this.state.fields
    const fieldErrors = this.validate(formData);
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

export { InputForm, Btn, ModalBody, Modal };
