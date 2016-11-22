import React from 'react';
import './css/Footer.css';
import Screen from 'react-responsive';

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

const Yeti = function(props) {
  return (
    <Screen maxWidth={543}>
      <img
        src={props.yeti}
        className="yeti yeti--xs"
        alt="Yeti"
      />
    </Screen>
    );
};
Yeti.propTypes = {
  yeti: React.PropTypes.string.isRequired,
};

const Trees = function(props) {
  return (
    <Screen maxWidth={543}>
      <div className="trees">
        <div className="trees__tree trees__tree--1"></div>
        <div className="trees__tree trees__tree--2"></div>
      </div>
    </Screen>
    );
};

export default Footer;
