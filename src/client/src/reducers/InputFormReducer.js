export default (state = {
    fields: {},
    fieldErrors: {},
  } , action) => {
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
};
