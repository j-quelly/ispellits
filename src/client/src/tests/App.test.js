// dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';

// components
import App from '../App';
import { Header, Logo, Lives } from '../Header';
// import Body from '../Body';
// import { Keyboard } from '../Engine';
// import Modal from '../Modal';
// import Footer from '../Footer';

// yeti states
// import yetiHello from '../images/yeti-hello.png';
// import yetiLose from '../images/yeti-lose.png';
// import yetiWin from '../images/yeti-win.png';

// data
// import dictionary from '../data/dictionary';

describe('<App />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <App />
    );
  });

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
  });

  describe('<Header />', () => {
    it('modal should be set to true', () => {
      expect(wrapper.find(Header).at(0).props().modal).toBe(true);
    });

    it('lives should be set to 1', () => {
      expect(wrapper.find(Header).at(0).props().lives).toBe(1);
    });

    it('score should be set to 0', () => {
      expect(wrapper.find(Header).at(0).props().score).toBe(0);
    });

    it('should die in a fire', () => {
      wrapper = shallow(<Header
                          modal={true}
                          lives={1}
                          score={0}
                        />);
      console.log(wrapper.find(Lives));
    });

  });

});

