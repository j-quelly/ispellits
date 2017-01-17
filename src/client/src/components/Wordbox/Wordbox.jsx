import React from 'react';
import Letter from '../Letter/Letter';

import './Wordbox.css';

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

export default Wordbox;