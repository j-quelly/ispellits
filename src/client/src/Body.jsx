import React from 'react';
import Engine from './Engine';
import Modal from './Modal';

const Body = function(props) {
  if (props.state.modal) {
    return (<Modal
              state={props.state}
              handleClick={props.handleStartGame}
              submitForm={props.submitForm}
              resetGame={props.resetGame}
            />);
  } else {
    return <Engine state={props.state} handleClick={props.handleClick} />;
  }
};
Body.propTypes = {
  state: React.PropTypes.object.isRequired,
  handleClick: React.PropTypes.func.isRequired,
  handleStartGame: React.PropTypes.func.isRequired,
  submitForm: React.PropTypes.func.isRequired,
  resetGame: React.PropTypes.func.isRequired,
};

export default Body;
