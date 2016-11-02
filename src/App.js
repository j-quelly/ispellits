import React, { Component } from 'react';

// components
import Header from './Header';
import Body from './Body';
import Footer from './Footer';

// yeti states
import yetiHello from './images/yeti-hello.png';
import yetiLose from './images/yeti-lose.png';
import yetiWin from './images/yeti-win.png';

// test dictionary
// import dictionary from './data/test-dictionary';

// data
import dictionary from './data/dictionary';

let clues = (() => {
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
      title: 'Game Rules',
      body: 'Try and guess the word based with the given clue. Guess incorrectly and lose a life. Run out of lives and the game ends. New lives are rewarded for every 100 points you accumulate.',
      btnText: 'Start',
      word: '',
      totalWords: Object.keys(dictionary).length,
      words: Object.keys(dictionary),
      clues: clues,
      clue: '',
      input: [],
      correct: [],
      pool: ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '-', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', '-', 'z', 'x', 'c', 'v', 'b', 'n', 'm'],
      yeti: yetiHello,
      score: 0,               // todo: confirm the use of this
      roundScore: 0,          // score for each round

      totalScore: 0,          // running total
      lives: 1,               

      modal: true,            // display the modal
      startScreen: true,      // display the start screen modal
      scoreScreen: false,     // hide the score screen
      inputScreen: false,     // hide the input screen
      highScoreScreen: false, // hide high score screen 
  
      startGame: false,       // todo: confirm use of this
      start: false,           // todo: confirm use of this
      end: false,             // todo: confirm use of this
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
      modal: false,         // hide the modal
      startScreen: false,   // hide the start screen modal
      scoreScreen: false,   // hide the score screen
      inputScreen: false,   // hide the input screen
      roundScore: 0,        // reset the round score

      gameStart: true,      // todo: confirm use of this
      start: true,          // todo: confirm use of this
    });
  }

  _updateWordBank = () => {
    let words = this.state.words;
    let clues = this.state.clues;
    let nextWord = words[Math.floor(Math.random() * words.length)];
    let clue = clues[words.indexOf(nextWord)];
    let totalWords = this.state.totalWords - 1;

    // remove words and clues
    words.splice(words.indexOf(nextWord), 1);
    clues.splice(clues.indexOf(clue), 1);
    
    this.setState({
      words: words,
      word: nextWord,
      totalWords: totalWords,
      clue: clue,
    });
  }

  _handleKeyboardClick = (index) => {
    let input = this.state.pool[index];
    this._updateGameState(input);
  }

  _updateGameState = (input) => {
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
        // score: this._incrementScore(10),
        roundScore: this._incrementScore(10),
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
          // score: this._decrementScore(2),
          roundScore: this._decrementScore(2),
          yeti: yetiLose,
        });
      }
    }
  }

  _incrementScore = (n) => {
    let score = this.state.roundScore;
    score += n;
    return score;
  }

  _decrementScore = (n) => {
    let score = this.state.roundScore;
    score -= n;
    return score;
  }

  _updateLives = (cb) => {
    let lives = this.state.lives;    
    let score = this.state.score;
    let totalScore = this.state.totalScore;
    let roundScore = this.state.roundScore;    
    totalScore += roundScore;


    if (totalScore >= 100) {
      lives = this._bonusLife(totalScore, lives);
    }   

    // if (this.state.correct.length === this.state.input.length) {
    //   lives++;
    // } else if (this.state.input.length === 26) {
    //   lives--;
    // }

    this.setState({
      lives: lives,
      totalScore: totalScore,
    }, () => {
      cb();
    });

  }

  _bonusLife = (totalScore, lives) => {
    let score = this.state.score; // 0
    if (totalScore - score >= 100) {
      lives++;
      score += 100;
    }
    this.setState({
      score: score
    });
    return lives;
  }

  _nextWord = () => {
    if (this.state.totalWords === 0) {
      console.log('beat the game');
      /**
       * Player won, end game
       */
      this.setState({
        title: 'You beat da game!',
        body: `Enter your name or something`,
        btnText: 'Submit',
        modal: true,        // show the modal
        inputScreen: true,  // show the input screen

        end: true,          // todo: confirm use of this
      });
    } else if (this.state.lives === 0) {
      console.log('died');
      /**
       * Player died, end game
       */
      this.setState({
        title: 'you dead',
        body: `Enter your name or something`,
        btnText: 'Submit',
        modal: true,        // show the modal
        inputScreen: true,  // show the input screen

        end: true,          // todo: confirm use of this
      });      
    } else {     
      console.log('round end');
      /**
       * End round
       */
      this.setState({
        title: 'Round End!',
        body: `You're a subs-hero!`,
        btnText: 'Next Word',
        modal: true,          // show the modal
        scoreScreen: true,    // hide the score screen

        start: false,         // todo: confirm use of this
      });
    }
  }

  _submitForm = () => {
    this.setState({
      inputScreen: false,     // hide the input screen
      highScoreScreen: true,  // show the high score screen
      title: 'High Scores',
    });
  }

  render() {
    return (
      <div className="App">
        <Header modal={this.state.modal}
                lives={this.state.lives}
                score={this.state.roundScore} />
        <Body state={this.state}
              handleStartGame={this._handleStartGame}
              handleClick={this._handleKeyboardClick}
              submitForm={this._submitForm} />
        <Footer yeti={this.state.yeti} />
      </div>
      );
  }
}

export default App;
