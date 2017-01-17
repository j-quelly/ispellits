import React from 'react';
import './Yeti.css';

const Yeti = function(props) {
  return (
    <img
      src={props.yeti}
      className="yeti"
      alt="Yeti"
    />
    );
};
Yeti.propTypes = {
  yeti: React.PropTypes.string.isRequired,
};

export default Yeti;