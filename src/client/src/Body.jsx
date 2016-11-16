import React from 'react';
import Engine from './Engine';
import Modal from './Modal';

const Body = function(props) {
  if (props.state.modal) {
    return (<Modal
              state={props.state}
              onClick={props.handleStartGame}
              submitForm={props.submitForm}
              resetGame={props.resetGame} />);
  } else {
    return (<Engine state={props.state} handleClick={props.handleClick} />);
  }
};

export default Body;
