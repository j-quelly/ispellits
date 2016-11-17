import React, { Component } from 'react';
import Screen from 'react-responsive';

import './css/Modal.css';

const Modal = function(props) {
  let state = props.state;
  if (state.startScreen) {
    return (<StartScreen handleClick={props.handleClick} />);
  } else if (state.scoreScreen) {
    return (<ScoreScreen
              roundScore={props.state.roundScore}
              totalScore={props.state.totalScore}
              handleClick={props.handleClick} />);
  } else if (state.inputScreen) {
    return (<InputScreen state={state} submitForm={props.submitForm} />);
  } else if (state.highScoreScreen) {
    return (<HighScores state={state} resetGame={props.resetGame} />);
  }
};
Modal.propTypes = {
  state: React.PropTypes.object,
  handleClick: React.PropTypes.func.isRequired,
  submitForm: React.PropTypes.func.isRequired,
  resetGame: React.PropTypes.func.isRequired,
};

const StartScreen = function(props) {
  // let state = props.state;
  return (
    <Screen maxWidth={543}>
      <div className="modal">
        <h1 className="modal__title">{props.title}</h1>
        <p className="modal__body">
          {props.body}
        </p>
        <Btn handleClick={props.handleClick} btnText={props.btnText} />
      </div>
    </Screen>
    );
};
StartScreen.propTypes = {
  title: React.PropTypes.string,
  body: React.PropTypes.string,
  btnText: React.PropTypes.string,
  handleClick: React.PropTypes.func.isRequired,
};
StartScreen.defaultProps = {
  title: 'Game Rules',
  body: 'Try and guess the word based with the given clue. Guess incorrectly and lose a life. Run out of lives and the game ends. New lives are rewarded for every 100 points you accumulate.',
  btnText: 'Start',
};


const ScoreScreen = function(props) {
  // let state = props.state;
  return (
    <Screen maxWidth={543}>
      <div className="modal">
        <h1 className="modal__title">{props.title}</h1>
        <p className="modal__body">
          {props.body}
        </p>
        <p className="modal__body">
          Score:
          {props.roundScore}
        </p>
        <p className="modal__body">
          Total Score:
          {props.totalScore}
        </p>
        <Btn handleClick={props.handleClick} btnText={props.btnText} />
      </div>
    </Screen>
    );
};
ScoreScreen.propTypes = {
  title: React.PropTypes.string,
  body: React.PropTypes.string,
  btnText: React.PropTypes.string,
  handleClick: React.PropTypes.func.isRequired,
};
ScoreScreen.defaultProps = {
  title: 'Round End',
  body: `You're a subs-hero!`,
  btnText: 'Next Word',
};

const InputScreen = function(props) {
  const state = props.state;
  return (
    <Screen maxWidth={543}>
      <div className="modal">
        <h1 className="modal__title">{state.title}</h1>
        <p className="modal__body">
          {props.body}
        </p>
        <Form submitForm={props.submitForm} />
      </div>
    </Screen>
    );
};
InputScreen.propTypes = {
  title: React.PropTypes.string.isRequired,
  body: React.PropTypes.string,
  submitForm: React.PropTypes.func.isRequired,
};
InputScreen.defaultProps = {
  body: `Enter your name or something...`,
};

class HighScores extends Component {
  _handleClick() {
    this.props.resetGame();
  }

  render() {
    let props = this.props.state;
    return (
      <Screen maxWidth={543}>
        <div className="modal">
          <h1 className="modal__title">{props.title}</h1>
          <p className="modal__body">
            Display high scores here
          </p>
          <button onClick={this._handleClick.bind(this)}>
            Play again?
          </button>
        </div>
      </Screen>
      );
  }
}

class Btn extends Component {
  _handleClick() {
    this.props.handleClick();
  }
  render() {
    return (
      <button className="btn" onClick={this._handleClick.bind(this)}>
        {this.props.btnText}
      </button>
      );
  }
}

class Form extends Component {
  _onFormSubmit(e) {
    e.preventDefault();
    this.props.submitForm();
  }

  render() {
    return (
      <form onSubmit={this._onFormSubmit.bind(this)}>
        <input placeholder="Name" ref="name" />
        <input type="submit" />
      </form>
      );
  }
}

export default Modal;
