import React, { Component } from 'react';
import Screen from 'react-responsive';
import { Score } from './Header';

import './css/Modal.css';

const Modal = function(props) {
  let state = props.state;
  if (state.startScreen) {
    return (<Guts>
              <Btn handleClick={props.handleClick} btnText="Start" />
            </Guts>);
  } else if (state.scoreScreen) {
    return (<Guts title="Round End" body="You're a subs-hero">
              <Score
                test="modal__body"
                score={props.state.roundScore}
                text="Score: "
              />
              <Score
                test="modal__body"
                score={props.state.totalScore}
                text="Total Score: "
              />
              <Btn handleClick={props.handleClick} btnText="Next Word" />
            </Guts>);
  } else if (state.inputScreen) {
    return (<Guts title={state.title} body="Enter your name...">
              <InputForm submitForm={props.submitForm} validationError={state.validationError} />
            </Guts>);
  } else if (state.highScoreScreen) {
    return (<Guts title="Hall of Fame" body="todo: display high scores here...">
              <Btn handleClick={props.resetGame} btnText="Play again?" />
            </Guts>);
  }
};

const Guts = function(props) {
  return (
    <Screen maxWidth={543}>
      <div className="modal">
        <h1 className="modal__title">{props.title}</h1>
        <p className="modal__body">
          {props.body}
        </p>
        {props.children}
      </div>
    </Screen>
    );
};
Guts.propTypes = {
  title: React.PropTypes.string.isRequired,
  body: React.PropTypes.string.isRequired,
  btnText: React.PropTypes.string.isRequired,
};
Guts.defaultProps = {
  title: 'Game Rules',
  body: 'Try and guess the word based with the given clue. Guess incorrectly and lose a life. Run out of lives and the game ends. New lives are rewarded for every 100 points you accumulate.',
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
    let errorMsg = (this.props.validationError ? <p className="error">Please enter your name.</p> : '');
    return (
      <form onSubmit={(e) => this.onFormSubmit(e)}>
        <input
          type="text"
          placeholder="Name"
          ref={ref => {
                 this.name = ref
               }}
        />
        {errorMsg}
        <input type="submit" className="btn" />
      </form>
      );
  }
}
InputForm.propTypes = {
  submitForm: React.PropTypes.func.isRequired,
};

export default Modal;
