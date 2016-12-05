import React, { Component } from 'react';

import './css/Engine.css';

const Engine = function(props) {
  const state = props.state;
  return (
    <div>
      <Clue clue={state.clue} />
      <Wordbox word={state.word} correct={state.correct} />
      <Keyboard
        pool={state.pool}
        used={state.input}
        handleClick={props.handleClick}
      />
    </div>
    );
};
Engine.propTypes = {
  state: React.PropTypes.object.isRequired,
  handleClick: React.PropTypes.func.isRequired,
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
  let lettersArr = props.word.split('');
  let letters = lettersArr.map((char, i) => <Letter
                                              key={char + i}
                                              char={char}
                                              found={(props.correct.includes(char) ? true : false)}
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
  let letters = props.pool.map((char, i) => {
    return (<Key
              key={char + i}
              id={i}
              char={char}
              handleClick={props.handleClick}
              used={(props.used.includes(char) ? true : false)}
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
  handleClick: React.PropTypes.func.isRequired,
};

class Key extends Component {
  handleClick() {
    this.props.handleClick(this.props.id);
  }
  render() {
    let className = (this.props.used ? 'keyboard__key keyboard__key--used' : 'keyboard__key');
    return (
      <span>{(this.props.char === '-' ? <br/> : <span onClick={() => this.handleClick()} className={className}>{this.props.char}</span>)}</span>
      );
  }
}
Key.propTypes = {
  id: React.PropTypes.number.isRequired,
  char: React.PropTypes.string.isRequired,
  used: React.PropTypes.bool.isRequired,
  handleClick: React.PropTypes.func.isRequired,
};

export default Engine;
