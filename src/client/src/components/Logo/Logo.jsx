import React from 'react';
import './Logo.css'

const Logo = function(props) {
  return (
    <div>
      <img
        src={props.logo}
        className="logo logo--xs"
        alt="I-Spell-Its logo"
      />
    </div>
    );
};
Logo.propTypes = {
  logo: React.PropTypes.string.isRequired,
};

export default Logo;