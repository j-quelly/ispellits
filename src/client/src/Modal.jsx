import React, { Component } from 'react';
import Screen from 'react-responsive';

import './css/Modal.css';

const Modal = function(props) {
  let state = props.state;
  if (state.startScreen) {
    return (<StartScreen state={state} handleClick={props.handleClick} />);
  } else if (state.scoreScreen) {
    return (<ScoreScreen state={state} handleClick={props.handleClick} />);
  } else if (state.inputScreen) {
    return (<InputScreen
              state={state}
              submitForm={props.submitForm} />);
  } else if (state.highScoreScreen) {
    return (<HighScores state={state} resetGame={props.resetGame} />);
  }
};

const StartScreen = function(props) {
  let state = props.state;
  return (
    <Screen maxWidth={543}>
      <div className="modal">
        <h1 className="modal__title">{state.title}</h1>
        <p className="modal__body">
          {state.body}
        </p>
        <Btn handleClick={props.handleClick} btnText={state.btnText} />
      </div>
    </Screen>
    );
};

const ScoreScreen = function(props) {
  let state = props.state;
  return (
    <Screen maxWidth={543}>
      <div className="modal">
        <h1 className="modal__title">{state.title}</h1>
        <p className="modal__body">
          {state.body}
        </p>
        <p className="modal__body">
          Score:
          {state.roundScore}
        </p>
        <p className="modal__body">
          Total Score:
          {state.totalScore}
        </p>
        <Btn handleClick={props.handleClick} btnText={state.btnText} />
      </div>
    </Screen>
    );
};

const InputScreen = function(props) {
  const state = props.state;
  return (
    <Screen maxWidth={543}>
      <div className="modal">
        <h1 className="modal__title">{state.title}</h1>
        <p className="modal__body">
          {state.body}
        </p>
        <Form submitForm={props.submitForm} />
      </div>
    </Screen>
    );
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
