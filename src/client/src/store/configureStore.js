// import the create store method
import { createStore } from 'redux';
// import the reducer for this component
import InputFormReducer from '../reducers/InputFormReducer.js';

// create the store
const store = createStore(InputFormReducer);

export default store;
