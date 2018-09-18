let countAnswer = 1;

export const addScore = () => {
   console.log('score: ' + countAnswer);
  return {
    type: 'ADD_SCORE',
    value: countAnswer++
  }
};

export const resetScore = () => {
  countAnswer = 1;
  return {
    type: "RESET_SCORE",
    value: 0
  }
};

