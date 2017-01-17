import React from 'react';

// components
import Engine from '../Engine/Engine';
import { Modal } from '../Modal/Modal';

const Body = function(props) {
  if (props.modal) {
    return (<Modal {...props} />);
  } else {
    return <Engine {...props} />;
  }
};

export default Body;
