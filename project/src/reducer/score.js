const score = (state = [], action) => {
  switch (action.type) {
    case 'ADD_SCORE':
      return [
        {
          value: action.value,
        }
      ];
    default:
      return state;
  }
};
export default score;
