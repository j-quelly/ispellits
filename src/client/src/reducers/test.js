// function createStore(reducer, initialState) {
//   let state = initialState;
//   const listeners = [];

//   const subscribe = (listener) => {
//     listeners.push(listener);
//   };

//   const getState = () => (state);

//   const dispatch = (action) => {
//     state = reducer(state, action);
//     listeners.forEach(l => l());
//   };

//   return {
//     getState,
//     dispatch,
//     subscribe,
//   }
// }

// function reducer(state, action) {
//   switch (action.type) {
//     case 'CLOSE_START_SCREEN':
//       return {
//         ...state,
//         modal: false,
//         startScreen: false
//       };
//     case 'KEYBOARD_INPUT':
//       return {
//         ...state,
//         // input: [...state.input, action.input]
//         input: state.input.concat(action.input)
//       };
//     case 'OPEN_SCORE_SCREEN':
//       return {
//         ...state,
//         modal: true,
//         scoreScreen: true,
//       };
//     case 'CLOSE_SCORE_SCREEN':
//       return {
//         ...state,
//         modal: false,
//         scoreScreen: false,
//       };
//     default:
//       return state;
//   }
// }

// const initialState = {
//   input: [],
//   modal: true,
//   startScreen: true,
//   scoreScreen: false,
// };

// const store = createStore(reducer, initialState);

// /* when a view dispatches an action
//    this is invoked after the state changes
//    it's purpose is to notifity react to rerender 
//    the reason this is done is beacuse the state is
//    managed outside of React
//    so instead of manually invoking store.getState()
//    the store will now automatically do it when the state updates.
// */
//  const listener = () => {
//   console.log(store.getState());
//  };

// // subscribe to the listener
// store.subscribe(listener);


// /**
//  * Tests 
//  */
// const closeStartScreen = {
//   type: 'CLOSE_START_SCREEN',
// };

// store.dispatch(closeStartScreen);

function createStore(reducer, initialState) {
  let state = initialState;
  const listeners = [];

  const subscribe = (listener) => {
    listeners.push(listener);
  };

  const getState = () => (state);

  const dispatch = (action) => {
    state = reducer(state, action);
    listeners.forEach(l => l());
  };

  return {
    getState,
    dispatch,
    subscribe,
  }
}

function reducer(state, action) {
  switch (action.type) {
    case 'HIGH_SCORE_FORM_FIELD_INPUT':
      return {
        ...state,
        fields: {
          ...state.fields,
          ...action.payload,
        }
      };
    case 'HIGH_SCORE_FORM_FIELD_ERROR':
      return {
        ...state,
        fieldErrors: {
          ...state.fieldErrors,
          ...action.payload,
        }
      };
    case 'HIGH_SCORE_FORM_RESET':
      return {
        ...state,
        fields: action.payload,
        fieldErrors: action.payload,
      };
    default:
      return state;
  }
}

const initialState = {
  fields: {},
  fieldErrors: {},
};

const store = createStore(reducer, initialState);

/* when a view dispatches an action
   this is invoked after the state changes
   it's purpose is to notifity react to rerender 
   the reason this is done is beacuse the state is
   managed outside of React
   so instead of manually invoking store.getState()
   the store will now automatically do it when the state updates.
*/
const listener = () => {
  console.log(store.getState());
};

// subscribe to the listener
store.subscribe(listener);

/**
 * Tests 
 */
const newFields = {};
newFields['name'] = 'J';
const highScoreFormInput = {
  type: 'HIGH_SCORE_FORM_FIELD_INPUT',
  payload: newFields,
};

store.dispatch(highScoreFormInput);

const newFieldsA = {};
newFieldsA['name'] = 'Ja';
const highScoreFormInputA = {
  type: 'HIGH_SCORE_FORM_FIELD_INPUT',
  payload: newFieldsA,
};

store.dispatch(highScoreFormInputA);

const newFields2 = {};
newFields2['phone'] = '5555555';
const highScoreFormInput2 = {
  type: 'HIGH_SCORE_FORM_FIELD_INPUT',
  payload: newFields2,
};

store.dispatch(highScoreFormInput2);


const errors = {};
errors.name = 'Please enter a name greater than 3 characters.';
const highScoreFormError = {
  type: 'HIGH_SCORE_FORM_FIELD_ERROR',
  payload: errors,
};

store.dispatch(highScoreFormError);

const highScoreFormReset = {
  type: 'HIGH_SCORE_FORM_RESET',
  payload: {},
};

store.dispatch(highScoreFormReset);
