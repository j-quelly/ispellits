import React from 'react';

import './Letter.css';

const Letter = function(props) {
  return (
    <p className="wb__letter">
      {(props.found ? props.char : '_')}
    </p>
    );
};
Letter.propTypes = {
  char: React.PropTypes.string.isRequired,
  found: React.PropTypes.bool.isRequired,
};

export default Letter;