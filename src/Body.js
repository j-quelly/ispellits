import React, { Component } from 'react';
import Engine from './Engine';
import Modal from './Modal';

class Body extends Component {
  render() {
    if (this.props.state.modal) {
      return (<Modal state={this.props.state}
                     onClick={this.props.handleStartGame} 
                     submitForm={this.props.submitForm} />);
    } else {
      return (<Engine state={this.props.state}
                      handleClick={this.props.handleClick} />);
    }
  }
}

export default Body;