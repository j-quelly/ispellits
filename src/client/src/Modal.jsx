import React, { Component } from 'react';
import { Score } from './Header';

import './css/Modal.css';

const Modal = function(props) {
  let state = props.state;
  if (state.startScreen) {
    return (<ModalBody>
              <Btn handleClick={props.handleClick} btnText="Start" />
            </ModalBody>);
  } else if (state.scoreScreen) {
    return (<ModalBody title="Good Job!" body="You're doing great, keep going.">
              <Score
                styles="modal__body"
                score={props.state.roundScore}
                text="Round Score: "
              />
              <Score
                styles="modal__body"
                score={props.state.totalScore}
                text="Total Score: "
              />
              <Btn handleClick={props.handleClick} btnText="Next Word" />
            </ModalBody>);
  } else if (state.inputScreen) {
    return (<ModalBody title={state.title} body="Input your name to enter the hall of fame.">
              <InputForm submitForm={props.submitForm} validationError={state.validationError} />
            </ModalBody>);
  } else if (state.highScoreScreen) {
    return (<ModalBody
              title="Hall of Fame"
              body=""
              highScores={state.highScores}
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
  }

  onFormSubmit(e) {
    e.preventDefault();
    const name = this.name.value;
    this.props.submitForm(name);
  }

  render() {
    let errorMsg = (this.props.validationError ? 'Please enter your name.' : '');
    return (
      <form onSubmit={(e) => this.onFormSubmit(e)}>
        <input
          type="text"
          placeholder="Name"
          ref={ref => {
                 this.name = ref
               }}
        />
        <p className="error">
          {errorMsg}
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
  submitForm: React.PropTypes.func.isRequired,
};

export default Modal;
