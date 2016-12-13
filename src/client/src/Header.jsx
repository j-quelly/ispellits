import React from 'react';

import './css/Header.css';

const Logo = function(props) {
  const styles = (props.modal ? 'logo logo--xs' : 'hide'); 
  return (
    <div>
      <img
        src={props.logo}
        className={styles}
        alt="I-Spell-Its logo"
      />
    </div>
    );
};
Logo.propTypes = {
  logo: React.PropTypes.string.isRequired,
  modal: React.PropTypes.bool.isRequired,
};

const Score = function(props) {
  const styles = (props.modal ? 'hide' : props.styles)
  const text = (props.text ? <strong>{props.text}</strong> : '');
  return (
    <p className={styles}>
      {text}
      {props.score} pts
    </p>
    );
};
Score.propTypes = {
  score: React.PropTypes.number.isRequired,  
  modal: React.PropTypes.bool.isRequired,
  text: React.PropTypes.string,
};
Score.defaultProps = {
  score: 0,
  styles: 'score score--right',
  text: '',
};

const Lives = function(props) {
  const styles = (props.modal ? 'hide' : 'lives lives--left')
  return (
    <p className={styles}>
      Lives:
      {props.lives}
    </p>
    );
};
Lives.propTypes = {
  lives: React.PropTypes.number.isRequired,
  modal: React.PropTypes.bool.isRequired,
};

export { Score, Logo, Lives };
