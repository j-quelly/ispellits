import React from 'react';

// components
import Keyboard from '../Keyboard/Keyboard';
import Wordbox from '../Wordbox/Wordbox';
import Clue from '../Clue/Clue';

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

export default Engine;
