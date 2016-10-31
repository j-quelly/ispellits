import React, { Component } from 'react';
import Screen from 'react-responsive';

import './css/Modal.css';

class Modal extends Component {
  render() {
    let props = this.props.state;
    return (
      <Screen maxWidth={543}>
        <div className='modal'>
          <h1 className='modal__title'>{props.title}</h1>
          <p className='modal__body'>
            {props.body}
          </p>
          <Btn onClick={this.props.onClick}
               btnText={props.btnText} />
        </div>
      </Screen>
      );
  }
}

class Btn extends Component {
  _handleClick() {
    this.props.onClick();
  }

  render() {
    return (
      <button className='btn'
              onClick={this._handleClick.bind(this)}>
        {this.props.btnText}
      </button>
      );
  }
}

// // todo: this may belong elsewhere...
// class Odometer extends Component {
//   render() {
//     let toggle = (this.props.score > 0 ? 'highscore' : 'highscore hide');
//     // let animate = (this.props.score > 0 ? 'odometer' : '');
//     return (
//       <div className={toggle}>
//         <h2 className='odometer'>{this.props.score}</h2>
//       </div>
//       );
//   }
// }

/*class Input extends Component {
  _handleInput(e) {
    let input = e.target.value;
    this.props.onInput(input);
    e.target.value = '';
  }

  render() {
    return (
      <form>
        <input onChange={this._handleInput.bind(this)} />
      </form>
      );
  }
}*/

export default Modal;
