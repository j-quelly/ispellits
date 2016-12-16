// dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

// components
import App from '../App';

describe('<App />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
  });

  it('should render <Footer /> component', () => {
    expect(
      wrapper.find('Footer').length
    ).toBe(1);
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
    beforeEach(() => {
      wrapper = shallow(<App/>);
    });

    it('should render <Body /> component', () => {
      expect(
        wrapper.find('Body').length
      ).toBe(1);
    });    
    
    it('should have props for state', () => { 
      expect(
        wrapper.find('Body').props().state
      ).toBeDefined();
    });

    it('should have props for handleClick', () => {
      expect(
        wrapper.find('Body').props().handleClick
      ).toBeDefined();      
    });

    it('should have props for handleStartGame', () => {
      expect(
        wrapper.find('Body').props().handleStartGame
      ).toBeDefined();      
    });    

    it('should have props for submitForm', () => {
      expect(
        wrapper.find('Body').props().submitForm
      ).toBeDefined();      
    });        

    it('should have props for resetGame', () => {
      expect(
        wrapper.find('Body').props().resetGame
      ).toBeDefined();      
    });        

  });  

});
