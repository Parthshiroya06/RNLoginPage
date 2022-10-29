export const changeValue = text => {
  return {
    type: 'changeValue',
    text: text,
  };
};

export const resetText = () => {
  return {
    type: 'resetText',
    text: '',
  };
};
