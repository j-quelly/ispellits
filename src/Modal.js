import React, { Component } from 'react';
import Screen from 'react-responsive';

import './css/Modal.css';

class Modal extends Component {
  render() {
    let props = this.props.state;
    if (props.startScreen) {
      return (<StartScreen state={props}
                           onClick={this.props.onClick} />);
    } else if (props.scoreScreen) {
      return (<ScoreScreen state={props}
                           onClick={this.props.onClick} />);
    } else if (props.inputScreen) {
      return (<InputScreen state={props}
                           onClick={this.props.onClick}
                           submitForm={this.props.submitForm} />);
    } else if (props.highScoreScreen) {
      return (<HighScores state={props} />);
    }
  }
}

class StartScreen extends Component {
  render() {
    let props = this.props.state;
    return (
      <Screen maxWidth={543}>
        <div className='modal'>
          <h1 className='modal__title'>{props.title}</h1>
          <p className='modal__body'>
            {props.body}
          </p>
          <Btn onClick={this.props.onClick}
               btnText={props.btnText} />
        </div>
      </Screen>
      );
  }
}

class ScoreScreen extends Component {
  render() {
    let props = this.props.state;
    return (
      <Screen maxWidth={543}>
        <div className='modal'>
          <h1 className='modal__title'>{props.title}</h1>
          <p className='modal__body'>
            {props.body}
          </p>
          <p className='modal__body'>
            Score:&nbsp;
            {props.roundScore}
          </p>
          <p className='modal__body'>
            Total Score:&nbsp;
            {props.totalScore}
          </p>          
          <Btn onClick={this.props.onClick}
               btnText={props.btnText} />
        </div>
      </Screen>
      );
  }
}

class InputScreen extends Component {
  render() {
    let props = this.props.state;
    return (
      <Screen maxWidth={543}>
        <div className='modal'>
          <h1 className='modal__title'>{props.title}</h1>
          <p className='modal__body'>
            {props.body}
          </p>
          <Form submitForm={this.props.submitForm} />
        </div>
      </Screen>
      );
  }
}

class HighScores extends Component {
  render() {
    let props = this.props.state;
    return (
      <Screen maxWidth={543}>
        <div className='modal'>
          <h1 className='modal__title'>{props.title}</h1>
          <p className='modal__body'>
            Display high scores here
          </p>
          <button>
            Play again?
          </button>
        </div>
      </Screen>
      );
  }
}

class Btn extends Component {
  _handleClick() {
    this.props.onClick();
  }
  render() {
    return (
      <button className='btn'
              onClick={this._handleClick.bind(this)}>
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
        <input placeholder='Name'
               ref='name' />
        <input type='submit' />
      </form>
      );
  }
}

export default Modal;
