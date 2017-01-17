import React from 'react';

import './Btn.css';

const Btn = function(props) {
  return (
    <button className="btn" onClick={() => props.handleClick()}>
      {props.btnText}
    </button>
    );
}
Btn.propTypes = {
  btnText: React.PropTypes.string.isRequired,
  handleClick: React.PropTypes.func.isRequired,
};
Btn.defaultProps = {
  btnText: 'Click Me',
};

export default Btn;
