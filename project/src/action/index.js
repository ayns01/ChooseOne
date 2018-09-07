let countAnswer = 0;

export const addScore = () => {
  console.log('score: ' + countAnswer);
  return {
    type: 'ADD_SCORE',
    value: countAnswer++
  }
};

