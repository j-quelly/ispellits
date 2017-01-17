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

});

describe('<ModalBody modal={true} scoreScreen={true} />', () => {
  let props, wrapper;

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

  it('should have props title: `Good Job!`', () => {
    expect(
      wrapper.find('ModalBody').props().title
    ).toBe('Good Job!');
  });

  it('should have props body: `You\'re doing great, keep it up.`', () => {
    expect(
      wrapper.find('ModalBody').props().body
    ).toBe('You\'re doing great, keep it up.');
  });

  it('should have props btnText: `Start`', () => {
    expect(
      wrapper.find('ModalBody').props().btnText
    ).toBe('Start');
  });

  it('should render 2 <Score /> components', () => {
    expect(
      wrapper.find('ModalBody').at(0).find('Score').length
    ).toBe(2);
  });

  describe('<ModalBody><Score /></ModalBody>', () => {

    it('should contain props `styles`', () => {
      const score1 = wrapper.find('ModalBody').at(0).find('Score').at(0);
      expect(
        score1.props().styles
      ).toBe('modal__body');
    });

    it('should contain props `score`', () => {
      const score1 = wrapper.find('ModalBody').at(0).find('Score').at(0);
      expect(
        score1.props().score
      ).toBe(0);
    });

    it('should contain props `text`', () => {
      const score1 = wrapper.find('ModalBody').at(0).find('Score').at(0);
      expect(
        score1.props().text
      ).toBe('Round Score: ');
    });

    it('should contain props `styles`', () => {
      const score2 = wrapper.find('ModalBody').at(0).find('Score').at(1);
      expect(
        score2.props().styles
      ).toBe('modal__body');
    });

    it('should contain props `score`', () => {
      const score2 = wrapper.find('ModalBody').at(0).find('Score').at(1);
      expect(
        score2.props().score
      ).toBe(0);
    });

    it('should contain props `text`', () => {
      const score2 = wrapper.find('ModalBody').at(0).find('Score').at(1);
      expect(
        score2.props().text
      ).toBe('Total Score: ');
    });

  });

  it('should render a <Btn /> component', () => {
    expect(
      wrapper.find('ModalBody').at(0).find('Btn').length
    ).toBe(1);
  });

  describe('<ModalBody><Btn /></ModalBody>', () => {
    it('should contain props `handleClick`', () => {
      const btn = wrapper.find('ModalBody').at(0).find('Btn')
      expect(
        btn.props().handleClick
      ).toBe(props.handleStartGame);
    });

    it('should contain props `btnText`', () => {
      const btn = wrapper.find('ModalBody').at(0).find('Btn')
      expect(
        btn.props().btnText
      ).toBe('Next Word');
    });

  });


});


describe('<ModalBody modal={true} inputScreen={true} />', () => {
  let props, wrapper;

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

  it('should have props title: `Game Rules`', () => {
    expect(
      wrapper.find('ModalBody').props().title
    ).toBe('Game Rules');
  });

  it('should have props body: `Input your name to enter the hall of fame.`', () => {
    expect(
      wrapper.find('ModalBody').props().body
    ).toBe('Input your name to enter the hall of fame.');
  });

  it('should have props btnText: `Start`', () => {
    expect(
      wrapper.find('ModalBody').props().btnText
    ).toBe('Start');
  });

  it('should render a <InputForm /> component', () => {
    expect(
      wrapper.find('ModalBody').at(0).find('InputForm').length
    ).toBe(1);
  });

  describe('<ModalBody><InputForm /></ModalBody>', () => {
    it('should have props submitForm: [function]', () => {
      const inputForm = wrapper.find('ModalBody').at(0).find('InputForm');
      expect(
        inputForm.props().submitForm
      ).toBe(props.submitForm);
    });

    it('should have props handleNameChange: [function]', () => {
      const inputForm = wrapper.find('ModalBody').at(0).find('InputForm');
      expect(
        inputForm.props().handleNameChange
      ).toBe(props.handleNameChange);
    });

    it('should have props handleFormSubmit: [function]', () => {
      const inputForm = wrapper.find('ModalBody').at(0).find('InputForm');
      expect(
        inputForm.props().handleFormSubmit
      ).toBe(props.handleFormSubmit);
    });
  });

});


describe('<ModalBody modal={true} highScoreScreen={true} />', () => {
  let props, wrapper;

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

  it('should have props title: `Hall of Fame`', () => {
    expect(
      wrapper.find('ModalBody').props().title
    ).toBe('Hall of Fame');
  });

  it('should have props body: ``', () => {
    expect(
      wrapper.find('ModalBody').props().body
    ).toBe('');
  });

  it('should have props highScores: `[undefined]`', () => {
    expect(
      wrapper.find('ModalBody').props().highScores
    ).toBe(undefined);
  });

  it('should have props btnText: `Start`', () => {
    expect(
      wrapper.find('ModalBody').props().btnText
    ).toBe('Start');
  });

  it('should render a <Btn /> component', () => {
    expect(
      wrapper.find('ModalBody').at(0).find('Btn').length
    ).toBe(1);
  });

  describe('<ModalBody><Btn /></ModalBody>', () => {
    it('should contain props `handleClick`', () => {
      const btn = wrapper.find('ModalBody').at(0).find('Btn')
      expect(
        btn.props().handleClick
      ).toBe(props.resetGame);
    });

    it('should contain props btnText: `Play again`', () => {
      const btn = wrapper.find('ModalBody').at(0).find('Btn')
      expect(
        btn.props().btnText
      ).toBe('Play again');
    });

  });

});
