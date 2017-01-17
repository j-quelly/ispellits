// dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

// components
import App from './App';

describe('<App />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
  });

  describe('<Header />', () => {

    it('should render <Header /> component', () => {
      expect(
        wrapper.find('Header').length
      ).toBe(1);
    });

    it('should have props for modal', function() {
      expect(
        wrapper.find('Header').props().modal
      ).toBeDefined()
    });

    it('should have props for lives', function() {
      expect(
        wrapper.find('Header').props().lives
      ).toBeDefined()
    });

    it('should have props for score', function() {

      expect(
        wrapper.find('Header').props().score
      ).toBeDefined()
    });

  });

  describe('<Body />', () => {

    it('should render <Body /> component', () => {
      expect(
        wrapper.find('Body').length
      ).toBe(1);
    });

    it('should have props for handleKeyboardClick', () => {
      expect(
        wrapper.find('Body').props().handleKeyboardClick
      ).toBeDefined();
    });

    it('should have props for handleStartGame', () => {
      expect(
        wrapper.find('Body').props().handleStartGame
      ).toBeDefined();
    });

    it('should have props for handleFormSubmit', () => {
      expect(
        wrapper.find('Body').props().handleFormSubmit
      ).toBeDefined();
    });

    it('should have props for resetGame', () => {
      expect(
        wrapper.find('Body').props().resetGame
      ).toBeDefined();
    });

  });

  describe('<Footer />', () => {
    it('should render <Footer /> component', () => {
      expect(
        wrapper.find('Footer').length
      ).toBe(1);
    });

    it('should have props for yeti', () => {
      expect(
        wrapper.find('Footer').props().yeti
      ).toBeDefined();
    });    

  });

});
