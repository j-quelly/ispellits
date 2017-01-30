export default (state, action) => {
  switch (action.type) {
    case 'CLOSE_START_SCREEN':
      return {
        ...state,
        modal: false,
        startScreen: false
      };
    // case 'OPEN_SCORE_SCREEN':
    //   return {
    //     ...state,
    //     modal: true,
    //     scoreScreen: true,
    //   };
    // case 'CLOSE_SCORE_SCREEN':
    //   return {
    //     ...state,
    //     modal: false,
    //     scoreScreen: false,
    //   };
    default:
      return state;
  }
};