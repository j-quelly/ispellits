import React from 'react';
import { Engine } from './Engine';
import { Modal } from './Modal';

const Body = function(props) {
  if (props.modal) {
    return (<Modal {...props} />);
  } else {
    return <Engine {...props} />;
  }
};

export default Body;
