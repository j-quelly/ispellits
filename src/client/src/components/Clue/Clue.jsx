import React from 'react';

import './Clue.css';

const Clue = function(props) {
  return (<p className="clue">
            {props.clue}
          </p>);
};
Clue.propTypes = {
  clue: React.PropTypes.string.isRequired,
};

export default Clue;