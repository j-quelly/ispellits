import React, { Component } from 'react';
import './Key.css';

class Key extends Component {
  handleClick() {
    this.props.handleKeyboardClick(this.props.id);
  }
  render() {
    const className = (this.props.used ? 'keyboard__key keyboard__key--used' : 'keyboard__key');
    return (
      <span>{(this.props.char === '-' ? <br/> : <span onClick={() => this.handleClick()} className={className}>{this.props.char}</span>)}</span>
      );
  }
}
Key.propTypes = {
  id: React.PropTypes.number.isRequired,
  char: React.PropTypes.string.isRequired,
  used: React.PropTypes.bool.isRequired,
  handleKeyboardClick: React.PropTypes.func.isRequired,
};

export default Key;