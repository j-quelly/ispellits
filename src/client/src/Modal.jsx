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
    return (<InputScreen title={state.title} submitForm={props.submitForm} />);
  } else if (state.highScoreScreen) {
    return (<HighScores resetGame={props.resetGame} />);
  }
};
Modal.propTypes = {
  state: React.PropTypes.object,
  handleClick: React.PropTypes.func.isRequired,
  submitForm: React.PropTypes.func.isRequired,
  resetGame: React.PropTypes.func.isRequired,
};

const StartScreen = function(props) {
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
  return (
    <Screen maxWidth={543}>
      <div className="modal">
        <h1 className="modal__title">{props.title}</h1>
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
  body: 'Enter your name or something...',
};

class HighScores extends Component {
  _handleClick() {
    this.props.resetGame();
  }

  render() {
    return (
      <Screen maxWidth={543}>
        <div className="modal">
          <h1 className="modal__title">{this.props.title}</h1>
          <p className="modal__body">
            {this.props.body}
          </p>
          <button onClick={this._handleClick.bind(this)}>
            Play again?
          </button>
        </div>
      </Screen>
      );
  }
}
HighScores.propTypes = {
  title: React.PropTypes.string,
  body: React.PropTypes.string,
};
HighScores.defaultProps = {
  title: 'Hall of Fame',
  body: 'todo: display high scores here...',
};

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
HighScores.propTypes = {
  btnText: React.PropTypes.string.isRequired,
};

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
Form.propTypes = {
  submitForm: React.PropTypes.func.isRequired,
};

export default Modal;
