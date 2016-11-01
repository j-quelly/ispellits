import React, { Component } from 'react';
import Screen from 'react-responsive';

import './css/Modal.css';

class Modal extends Component {
  render() {
    let props = this.props.state;
    if (props.end) {
      alert('end game');
    }
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

// class Input extends Component {
//   _handleInput(e) {
//     let input = e.target.value;
//     this.props.onInput(input);
//   }

//   render() {
//     return (
//       <form>
//         <input onChange={this._handleInput.bind(this)} />
//       </form>
//       );
//   }
// }

export default Modal;
