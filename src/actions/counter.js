let value = 0;
export const increment = params => {
  return {
    type: 'increment',
    data: params + 1,
  };
};

export const decrement = params => {
  return {
    type: 'decrement',
    data: params - 1,
  };
};

export const reset = () => {
  return {
    type: 'reset',
    data: 0,
  };
};
