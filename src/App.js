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

// test dictionary
import dictionary from './data/test-dictionary';

// data
// import dictionary from './data/dictionary';

let clues = (function() {
    let vals = [];
    for (let i in dictionary) {
      if (dictionary.hasOwnProperty(i)) {
        vals.push(dictionary[i]);  
      }
    }
    return vals;
})(dictionary);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gameStart: true, // todo: confirm use of this
      title: 'Game Rules',
      body: 'Try and guess the word based with the given clue. Guess incorrectly and lose a life. Run out of lives and the game ends. New lives are rewarded for every 100 points you accumulate.',
      btnText: 'Start',
      start: false, // todo: confirm use of this
      word: '',
      totalWords: Object.keys(dictionary).length,
      words: Object.keys(dictionary),
      clues: clues,
      clue: '',
      input: [],
      correct: [],
      pool: ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '-', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', '-', 'z', 'x', 'c', 'v', 'b', 'n', 'm'],
      yeti: yetiHello,
      score: 0,
      roundScore: 0,
      lives: 1,
      end: false, // todo: confirm use of this
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
    let score = this.state.score;
    let lives = this.state.lives;    
    let previousRoundScore = this.state.roundScore;
    if (score - previousRoundScore >= 100) {
      lives++;
    }   
    if (this.state.correct.length === this.state.input.length) {
      lives++;
    } else if (this.state.input.length === 26) {
      lives--;
    }
    this.setState({
      lives: lives,
      roundScore: (score >= 100 ? score : this.state.roundScore),
    }, () => {
      cb();
    });
  }

  _nextWord = () => {
    if (this.state.totalWords === 0) {
      this.setState({
        title: 'You beat da game!',
        body: `Enter your name or something`,
        'btnText': 'Submit',
        end: true,
        gameStart: true,
      });
    } else if (this.state.lives === 0) {
      this.setState({
        title: 'Good Job!',
        body: `Enter your name or something`,
        'btnText': 'Submit',
        end: true,
        gameStart: true,
      });      
    } else {     
      this.setState({
        title: 'Good Job!',
        body: `You're a subs-hero!`,
        btnText: 'Next Word',
        start: false,
        gameStart: true,
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
