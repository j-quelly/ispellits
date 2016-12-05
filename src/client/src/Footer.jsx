import React from 'react';
import './css/Footer.css';

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

const Trees = function(props) {
  return (
    <div className="forest">
      <div className="forest__tree forest__tree--1"></div>
      <div className="forest__tree forest__tree--2"></div>
    </div>
    );
};

export default Footer;
