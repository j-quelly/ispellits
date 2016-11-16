import React from 'react';
import Screen from 'react-responsive';

import './css/Header.css';
import logo from './images/I-Spell-Its.png';

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

const Logo = function(props) {
  return (
    <div>
      {/* mobile device */}
      <Screen maxWidth={543}>
        <img
          src={props.logo}
          className="logo logo--xs"
          alt="I-Spell-Its logo" />
      </Screen>
      {/* larger devices */}
      <Screen minWidth={544}>
        <img
          src={props.logo}
          className="logo"
          alt="I-Spell-Its logo" />
      </Screen>
    </div>
    );
};

const Score = function(props) {
  return (
    <p className="score score--right">
      {props.score} pts
    </p>
    );
};

const Lives = function(props) {
  return (
    <p className="lives lives--left">
      Lives:
      {props.lives}
    </p>
    );
};

export default Header;
