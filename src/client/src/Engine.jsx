import React, { Component } from 'react';

import './css/Engine.css';

const Engine = function(props) {
  return (
    <div>
      <Clue clue={props.clue} />
      <Wordbox word={props.word} correct={props.correct} />
      <Keyboard
        pool={props.pool}
        used={props.input}
        handleKeyboardClick={props.handleKeyboardClick}
      />
    </div>
    );
};

const Clue = function(props) {
  return (<p className="clue">
            {props.clue}
          </p>);
};
Clue.propTypes = {
  clue: React.PropTypes.string.isRequired,
};

const Wordbox = function(props) {
  const lettersArr = props.word.split('');
  const letters = lettersArr.map((char, i) => <Letter
                                              key={char + i}
                                              char={char}
                                              found={(props.correct.indexOf(char) >= 0 ? true : false)}
                                            />);
  return (
    <div className="wb">
      {letters}
    </div>
    );
};
Wordbox.propTypes = {
  word: React.PropTypes.string.isRequired,
  correct: React.PropTypes.array.isRequired,
};

const Letter = function(props) {
  return (
    <p className="wb__letter">
      {(props.found ? props.char : '_')}
    </p>
    );
};
Letter.propTypes = {
  char: React.PropTypes.string.isRequired,
  found: React.PropTypes.bool.isRequired,
};

const Keyboard = function(props) {
  const letters = props.pool.map((char, i) => {
    return (<Key
              key={char + i}
              id={i}
              char={char}
              handleKeyboardClick={props.handleKeyboardClick}
              used={(props.used.indexOf(char) >= 0 ? true : false)}
            />);
  });
  return (
    <p className="keyboard">
      {letters}
    </p>
    );
};
Keyboard.propTypes = {
  pool: React.PropTypes.array.isRequired,
  used: React.PropTypes.array.isRequired,
  handleKeyboardClick: React.PropTypes.func.isRequired,
};

class Key extends Component {
  handleClick() {
    this.props.handleKeyboardClick(this.props.id);
  }
  render() {
    const className = (this.props.used ? 'keyboard__key keyboard__key--used' : 'keyboard__key');
    return (
      <span>{(this.props.char === '-' ? <br/> : <span onClick={() => this.handleClick()} className={className}>{this.props.char}</span>)}</span>
      );
  }
}
Key.propTypes = {
  id: React.PropTypes.number.isRequired,
  char: React.PropTypes.string.isRequired,
  used: React.PropTypes.bool.isRequired,
  handleKeyboardClick: React.PropTypes.func.isRequired,
};

export { Engine, Clue, Wordbox, Letter, Keyboard, Key };
