import React from 'react';

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
Header.propTypes = {
  modal: React.PropTypes.bool.isRequired,
  lives: React.PropTypes.number.isRequired,
  score: React.PropTypes.number.isRequired,
};

const Logo = function(props) {
  return (
    <div>
      <img
        src={props.logo}
        className="logo logo--xs"
        alt="I-Spell-Its logo"
      />
    </div>
    );
};
Logo.propTypes = {
  logo: React.PropTypes.string.isRequired,
};

const Score = function(props) {
  const text = (props.text ? <strong>{props.text}</strong> : '');
  return (
    <p className={props.styles}>
      {text}
      {props.score} pts
    </p>
    );
};
Score.propTypes = {
  score: React.PropTypes.number.isRequired,
  test: React.PropTypes.string,
  text: React.PropTypes.string,
};
Score.defaultProps = {
  score: 0,
  styles: 'score score--right',
  text: '',
};

const Lives = function(props) {
  return (
    <p className="lives lives--left">
      Lives:&nbsp;
      {props.lives}
    </p>
    );
};
Lives.propTypes = {
  lives: React.PropTypes.number.isRequired,
};

export { Header, Score, Logo, Lives };
