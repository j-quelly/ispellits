import React, { Component } from 'react';
import './css/Footer.css';
import Screen from 'react-responsive';

class Footer extends Component {
  render() {
    return (
      <div>
        <Yeti yeti={this.props.yeti} />
        <Trees />
      </div>
      );
  }
}

class Yeti extends Component {
  render() {
    return (
      <Screen maxWidth={543}>
        <img
          src={this.props.yeti}
          className="yeti yeti--xs"
          alt="Yeti" />
      </Screen>
      );
  }
}

class Trees extends Component {
  render() {
    return (
      <Screen maxWidth={543}>
        <div className="trees">
          <div className="trees__tree trees__tree--1"></div>
          <div className="trees__tree trees__tree--2"></div>
        </div>
      </Screen>
      );
  }
}

export default Footer;
