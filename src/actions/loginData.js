export const logedIn = value => {
  const {username, password} = value;
  return {
    type: 'logedIn',
    loginText: {...value, isLogin: true},
  };
};

export const resetLoginText = () => {
  return {
    type: 'resetLoginText',
    LogOutText: {isLogin: false, username: '', password: ''},
  };
};
