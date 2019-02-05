const rootReducer = (state, action) => {
  switch (action.type) {
  case 'ADD_ANSWER':
    return { ...state, answers: [...state.answers, action.payload] };
  case 'TOGGLE':
    return state;
  case 'TOGGLE_JS':
    return { ...state, js: action.payload };
  case 'TOGGLE_MODE':
    return { ...state, mode: action.payload };
  default:
    return state;
  }
};

export default rootReducer;
