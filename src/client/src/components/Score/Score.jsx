import React from 'react';
import './Score.css';

const Score = function(props) {
  const text = (props.text ? <strong>{props.text}</strong> : '');
  return (
    <p className={props.styles}>
      {text}
      {props.score} pts
    </p>
    );
};
Score.propTypes = {
  score: React.PropTypes.number.isRequired,
  text: React.PropTypes.string,
  styles: React.PropTypes.string,
};
Score.defaultProps = {
  score: 0,
  styles: 'score score--right',
  text: '',
};

export default Score;