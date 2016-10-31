import React, { Component } from 'react';
import Engine from './Engine';
import Modal from './Modal';

class Body extends Component {
  render() {
    if (this.props.state.gameStart) {
      return (<Modal state={this.props.state}
                     onClick={this.props.handleStartGame} />);
    } else {
      return (<Engine state={this.props.state}
                      handleClick={this.props.handleClick} />);
    }
  }
}

export default Body;