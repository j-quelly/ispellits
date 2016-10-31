import React, { Component } from 'react';

// components
import Header from './Header';
import Body from './Body';
import Footer from './Footer';

// styles
import './css/App.css';

// yeti states
import yetiHello from './images/yeti-hello.png';
import yetiLose from './images/yeti-lose.png';
import yetiWin from './images/yeti-win.png';

// todo: refactor code to use hashmap data structure
import dictionary from './data/test-dictionary';

// testing
import words from './data/test-words';
import clues from './data/test-definitions';

// data
// import words from './data/words';
// import definitions from './data/definitions';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gameStart: true,

      // modal state
      title: 'Game Rules',
      body: 'Try and guess the word based with the given clue. Guess incorrectly and lose a life. Run out of lives and the game ends. New lives are rewarded for every 100 points you accumulate.',
      btnText: 'Start',

      start: false,

      word: '',
      totalWords: words.length,
      words: words,
      clues: clues,
      clue: '',

      input: [],
      correct: [],
      pool: ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '-', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', '-', 'z', 'x', 'c', 'v', 'b', 'n', 'm'],
      yeti: yetiHello,
      score: 0,
      roundScore: 0,
      lives: 1,
      end: false,

      // todo: replace words array with hashmap data structure
      dictionary: dictionary,
    };
  }

  _handleStartGame = () => {
    this._proceed();
  }

  _proceed = () => {
    this._updateWordBank();

    this.setState({
      correct: [],
      input: [],
      start: true,

      // hide modal
      gameStart: false,
    });
  }

  _updateWordBank = () => {
    let words = this.state.words;
    let clues = this.state.clues;
    let nextWord = words[Math.floor(Math.random() * words.length)];
    let clue = clues[words.indexOf(nextWord)];

    // remove words
    words.splice(words.indexOf(nextWord), 1);

    // remove clues
    clues.splice(clues.indexOf(clue), 1);

    let totalWords = this.state.totalWords - 1;

    this.setState({
      words: words,
      word: nextWord,
      totalWords: totalWords,
      clue: clue,
    });
  }

  /*  _handleInput = (input) => {
      this._update(input);
    }*/

  _handleClick = (index) => {
    let input = this.state.pool[index];
    this._update(input);
  }

  _update = (input) => {
    let word = this.state.word;

    // if the input is found
    if (word.includes(input) && !this.state.correct.includes(input)) {
      // count the # of occurences
      let count = (word.match(new RegExp(input, "g")) || []).length;
      let arr = [];
      for (let i = 0; i < count; i++) {
        arr.push(input);
      }

      this.setState({
        correct: [...this.state.correct, ...arr],
        input: [...this.state.input, input],
        score: this._incrementScore(10),
        yeti: yetiWin,
      }, () => {
        if (this.state.correct.length === this.state.word.length) {
          setTimeout(() => {
            this._updateLives(this._nextWord);
          }, 800);
        }
      });
    } else {
      if (!this.state.input.includes(input)) {
        this.setState({
          input: [...this.state.input, input],
          score: this._decrementScore(2),
          yeti: yetiLose,
        });
      }
    }
  }

  _incrementScore = (n) => {
    let score = this.state.score;
    score += n;
    return score;
  }

  _decrementScore = (n) => {
    let score = this.state.score;
    score -= n;
    return score;
  }

  _updateLives = (cb) => {
    let lives = this.state.lives;
    if (this.state.correct.length === this.state.input.length) {
      lives++;
    } else if (this.state.input.length === 26) {
      lives--;
    }
    this.setState({
      lives: lives
    }, () => {
      cb();
    });
  }

  _nextWord = () => {
    if (this.state.totalWords === 0 || this.state.lives === 0) {
      this.setState({
        title: 'Good Job!',
        body: `Enter your name or something`,

        'btnText': 'Submit',

        // may no longer needs this..
        end: true,

      // testing this state..
      gameStart: true,        
      });
    } else {
      this.setState({
        title: 'Good Job!',
        body: `You're a subs-hero!`,
        btnText: 'Next Word',

        // may no longer needs this??
        start: false,

        // testing this state..
        gameStart: true,
      }, () => {
        setTimeout(() => {
          this.setState({
            roundScore: this.state.score
          });
        }, 2000);
      });
    }
  }

  render() {
    return (
      <div className="App">
        <Header gameStart={this.state.gameStart}
                lives={this.state.lives}
                score={this.state.score} />
        <Body state={this.state}
              handleStartGame={this._handleStartGame}
              handleClick={this._handleClick} />
        <Footer yeti={this.state.yeti} />
      </div>
      );
  }
}

export default App;
