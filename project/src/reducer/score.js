const score = (state = [], action) => {
  switch (action.type) {
    case 'ADD_SCORE':
      return [
        ...state,
        {
          value: action.value,
        }
      ];
    default:
      return state;
  }
};
export default score;
