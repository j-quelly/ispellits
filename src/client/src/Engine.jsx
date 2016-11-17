import React, { Component } from 'react';
import Screen from 'react-responsive';

import './css/Engine.css';

const Engine = function(props) {
  const state = props.state;
  return (
    <Screen maxWidth={543}>
      <Clue clue={state.clue} />
      <Wordbox word={state.word} correct={state.correct} />
      <Keyboard
        pool={state.pool}
        used={state.input}
        handleClick={props.handleClick} />
    </Screen>
    );
};

const Clue = function(props) {
  return (<p className="clue">
            {props.clue}
          </p>);
};

const Wordbox = function(props) {
  let lettersArr = props.word.split('');
  let letters = lettersArr.map((char, i) => <Letter
                                              key={char + i}
                                              char={char}
                                              found={(props.correct.includes(char) ? true : false)} />);
  return (
    <div className="wb">
      {letters}
    </div>
    );
};

const Letter = function(props) {
    return (
      <p className="wb__letter">
        {(props.found ? props.char : '_')}
      </p>
      );
};

const Keyboard = function(props) {
    let letters = props.pool.map((char, i) => {
      return (<Key
                key={char + i}
                id={i}
                char={char}
                handleClick={props.handleClick}
                used={(props.used.includes(char) ? true : false)} />);
    });
    return (
      <p className="keyboard">
        {letters}
      </p>
      );
};

class Key extends Component {
  _handleClick() {
    this.props.handleClick(this.props.id);
  }
  render() {
    let className = (this.props.used ? 'keyboard__key keyboard__key--used' : 'keyboard__key');
    return (
      <span>{(this.props.char === '-' ? <br/> : <span onClick={this._handleClick.bind(this)} className={className}>{this.props.char}</span>)}</span>
      );
  }
}

export default Engine;
