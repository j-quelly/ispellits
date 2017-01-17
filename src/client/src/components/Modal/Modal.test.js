// dependencies
import React from 'react';
import { shallow } from 'enzyme';

// components
import { Modal } from './Modal';

describe('<ModalBody modal={true} startScreen={true} />', () => {
  let props, wrapper;

  beforeEach(() => {
    props = {
      modal: true,
      startScreen: true,
      scoreScreen: false,
      inputScreen: false,
      highScoreScreen: false,
      handleStartGame: () => {
      },
      handleKeyboardClick: () => {
      },
      resetGame: () => {
      },
      handleFormSubmit: () => {
      },
    };
    wrapper = shallow(<Modal {...props} />);
  });

  it('should render the <ModalBody /> component', () => {
    expect(
      wrapper.find('ModalBody').length
    ).toBe(1);
  });

  it('should render a <Btn /> component', () => {
    expect(
      wrapper.find('ModalBody').at(0).find('Btn').length
    ).toBe(1);
  });

  it('<Btn /> should have props `handleClick`', () => {
    expect(
      wrapper.find('ModalBody').at(0).find('Btn').props().handleClick
    ).toBe(props.handleStartGame);
  });

  it('<Btn /> should have props `btnText`', () => {
    expect(
      wrapper.find('ModalBody').at(0).find('Btn').props().btnText
    ).toBe('Start');
  });

  describe('<ModalBody modal={true} scoreScreen={true} />', () => {
    beforeEach(() => {
      props = {
        modal: true,
        startScreen: false,
        scoreScreen: true,
        inputScreen: false,
        highScoreScreen: false,
        handleStartGame: () => {
        },
        handleKeyboardClick: () => {
        },
        resetGame: () => {
        },
        handleFormSubmit: () => {
        },
      };
      wrapper = shallow(<Modal {...props} />);
    // throw wrapper.debug();
    });

    it('should render the <ModalBody /> component', () => {
      expect(
        wrapper.find('ModalBody').length
      ).toBe(1);
    });

    it('should render 2 <Score /> components', () => {
      expect(
        wrapper.find('ModalBody').at(0).find('Score').length
      ).toBe(2);
    });

    // TODO: test score props for both score components?

    it('should render a <Btn /> component', () => {
      expect(
        wrapper.find('ModalBody').at(0).find('Btn').length
      ).toBe(1);
    });

    // TOOD: test btn props and values

  });

  describe('<ModalBody modal={true} inputScreen={true} />', () => {
    beforeEach(() => {
      props = {
        modal: true,
        startScreen: false,
        scoreScreen: false,
        inputScreen: true,
        highScoreScreen: false,
        handleStartGame: () => {
        },
        handleKeyboardClick: () => {
        },
        resetGame: () => {
        },
        handleFormSubmit: () => {
        },
        submitForm: () => {
        },
        handleNameChange: () => {
        },
      };
      wrapper = shallow(<Modal {...props} />);
    // throw wrapper.debug();
    });

    it('should render the <ModalBody /> component', () => {
      expect(
        wrapper.find('ModalBody').length
      ).toBe(1);
    });

    it('should render a <InputForm /> component', () => {
      expect(
        wrapper.find('ModalBody').at(0).find('InputForm').length
      ).toBe(1);
    });

    // TODO: test props for parent
    // TODO: test props for child

  });

  describe('<ModalBody modal={true} highScoreScreen={true} />', () => {
    beforeEach(() => {
      props = {
        modal: true,
        startScreen: false,
        scoreScreen: false,
        inputScreen: false,
        highScoreScreen: true,
        handleStartGame: () => {
        },
        handleKeyboardClick: () => {
        },
        resetGame: () => {
        },
        handleFormSubmit: () => {
        },
        submitForm: () => {
        },
        handleNameChange: () => {
        },
      };
      wrapper = shallow(<Modal {...props} />);
    // throw wrapper.debug();
    });

    it('should render the <ModalBody /> component', () => {
      expect(
        wrapper.find('ModalBody').length
      ).toBe(1);
    });

    it('should render a <Btn /> component', () => {
      expect(
        wrapper.find('ModalBody').at(0).find('Btn').length
      ).toBe(1);
    });

    // TODO: test props for parent
    // TODO: test props for child

  });

});
