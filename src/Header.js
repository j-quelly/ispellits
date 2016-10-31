import React, { Component } from 'react';
import Screen from 'react-responsive';

import './css/Header.css';
import logo from './images/I-Spell-Its.png';

class Header extends Component {
  render() {
    if (this.props.gameStart) {
      return (<Logo logo={logo} />);
    } else {
      return (
        <div>
          <Lives lives={this.props.lives} />
          <Score score={this.props.score} />
        </div>
        );
    }
  }
}

class Logo extends Component {
  render() {
    return (
      <div>
        {/* mobile device */}
        <Screen maxWidth={543}>
          <img src={this.props.logo}
               className='logo__img logo--xs' 
               alt='I-Spell-Its' />
        </Screen>
        {/* larger devices */}
        <Screen minWidth={544}>
          <img src={this.props.logo}
               className='logo__img'
               alt='I-Spell-Its' />
        </Screen>
      </div>
      );
  }
}

class Score extends Component {
  render() {
    return (
      <p className="score score--right">
        {this.props.score} pts
      </p>
      );
  }
}

class Lives extends Component {
  render() {
    return (
      <p className="lives lives--left">
        Lives:&nbsp;
        {this.props.lives}
      </p>
      );
  }
}

export default Header;
