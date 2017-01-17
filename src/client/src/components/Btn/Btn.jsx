import React, { Component } from 'react';

import './Btn.css';

class Btn extends Component {
  handleClick() {
    this.props.handleClick();
  }

  render() {
    return (
      <button className="btn" onClick={() => this.handleClick()}>
        {this.props.btnText}
      </button>
      );
  }
}
Btn.propTypes = {
  btnText: React.PropTypes.string.isRequired,
  handleClick: React.PropTypes.func.isRequired,
};
Btn.defaultProps = {
  btnText: 'Click Me',
};

export default Btn;