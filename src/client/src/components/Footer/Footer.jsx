import React from 'react';

// child components
import Trees from '../Trees/Trees';
import Yeti from '../Yeti/Yeti';

const Footer = function(props) {
  return (
    <div>
      <Yeti yeti={props.yeti} />
      <Trees />
    </div>
    );
};
Footer.propTypes = {
  yeti: React.PropTypes.string.isRequired,
};



export default Footer;
