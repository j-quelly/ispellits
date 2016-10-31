import React, { Component } from 'react';
import Screen from 'react-responsive';

import './css/Engine.css';

class Engine extends Component {
  render() {
    let props = this.props.state;
    return (
      <Screen maxWidth={543}>
        <Clue clue={props.clue} />
        <Wordbox word={props.word}
                 correct={props.correct} />
        <Keyboard pool={props.pool}
                  used={props.input}
                  onClick={this.props.handleClick} />
      </Screen>
      );
  }
}

class Clue extends Component {
  render() {
    return (<p className="clue">
              {this.props.clue}
            </p>);
  }
}

class Wordbox extends Component {
  render() {
    let lettersArr = this.props.word.split('');
    let letters = lettersArr.map((char, i) => <Letter key={i}
                                                      char={char}
                                                      found={(this.props.correct.includes(char) ? true : false)} />);
    return (
      <div className="word">
        {letters}
      </div>
      );
  }
}

class Letter extends Component {
  render() {
    return (
      <p className="letter">
        {(this.props.found ? this.props.char : '_')}
      </p>
      );
  }
}

class Keyboard extends Component {
  render() {
    let letters = this.props.pool.map((char, i) => {
      return (<Char key={i}
                    id={i}
                    char={char}
                    onClick={this.props.onClick}
                    used={(this.props.used.includes(char) ? true : false)} />);
    });
    return (
      <p className="alphabet">
        {letters}
      </p>
      );
  }
}

class Char extends Component {
  _handleClick() {
    this.props.onClick(this.props.id);
  }
  render() {
    let className = (this.props.used ? 'char used' : 'char');
    return (
      <span>{(this.props.char === '-' ? <br/> : <span onClick={this._handleClick.bind(this)}
                                                className={className}>{this.props.char}</span>)}</span>
      );
  }
}

export default Engine;
