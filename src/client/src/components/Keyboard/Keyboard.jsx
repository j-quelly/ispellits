import React from 'react';

import Key from '../Key/Key'
import './Keyboard.css';

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

export default Keyboard;