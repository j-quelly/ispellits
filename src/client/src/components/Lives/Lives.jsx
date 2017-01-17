import React from 'react';
import './Lives.css';

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

export default Lives;