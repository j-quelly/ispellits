import React from 'react';

// components
import Lives from '../Lives/Lives';
import Score from '../Score/Score';
import Logo from '../Logo/Logo';

// assets
import logo from './I-Spell-Its.png';

const Header = function(props) {
  if (props.modal) {
    return (<Logo logo={logo} />);
  } else {
    return (
      <div>
        <Lives lives={props.lives} />
        <Score score={props.score} />
      </div>
      );
  }
};
Header.propTypes = {
  modal: React.PropTypes.bool.isRequired,
  lives: React.PropTypes.number.isRequired,
  score: React.PropTypes.number.isRequired,
};

export default Header;
