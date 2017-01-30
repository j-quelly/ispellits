import InputFormReducer from './InputForm.js';

describe('reducers', () => {
  const state = {
    fields: {},
    fieldErrors: {},
  };

  describe('InputFormReducer', () => {
    it('should provide the initial state', () => {
      expect(InputFormReducer(state, {})).toBe(state);
    });

    it('should handle HIGH_SCORE_FORM_FIELD_INPUT action', () => {
      const newState = {
        ...state,
        fields: {
          name: 'J'
        }
      };
      expect(InputFormReducer(state, {
        type: 'HIGH_SCORE_FORM_FIELD_INPUT',
        payload: {
          name: 'J',
        }
      })).toEqual(newState);
    });

    it('should handle HIGH_SCORE_FORM_FIELD_ERROR action', () => {
      const newState = {
        ...state,
        fieldErrors: {
          name: 'Please enter your name.',
        }
      };
      expect(InputFormReducer(state, {
        type: 'HIGH_SCORE_FORM_FIELD_ERROR',
        payload: {
          name: 'Please enter your name.'
        }
      })).toEqual(newState);
    });    

    it('should handle ignore unknown actions', () => {
      const newState = {
        fields: {},
        fieldErrors: {},
      };
      expect(InputFormReducer(state, {
        type: 'unknown',
        payload: {}
      })).toEqual(newState);
    });
  });
});
