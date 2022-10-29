import {combineReducers} from 'redux';

const countReducer = (state = [], action) => {
  switch (action.type) {
    case 'increment':
      return action.data;

    case 'decrement':
      return action.data;

    case 'reset':
      return 0;

    default:
      return state;
  }
};

const changeTextValue = (state = '', action) => {
  switch (action.type) {
    case 'changeValue':
      return action.text;
    case 'resetText':
      return action.text;
    default:
      return state;
  }
};

const apiDatareducer = (state = [], action) => {
  switch (action.type) {
    case 'apiData':
      return action.data;

    default:
      return state;
  }
};

const apiDatareducer2 = (state = [], action) => {
  switch (action.type) {
    case 'apiData2':
      return action.dataApi;

    default:
      return state;
  }
};
const loginReducer = (state = '', action) => {
  switch (action.type) {
    case 'logedIn':
      return action.loginText;
    case 'resetLoginText':
      return action.LogOutText;
    default:
      return state;
  }
};
const netInfo = (state = {}, action) => {
  switch (action.type) {
    case 'netinfo':
      return action.isConnected;

    default:
      return state;
  }
};

const languageReducer = (state = {}, action) => {
  switch (action.type) {
    case 'language':
      return action.language;

    default:
      return state;
  }
};

const rootReducer = combineReducers({
  count: countReducer,
  text: changeTextValue,
  data: apiDatareducer,
  dataApi: apiDatareducer2,
  loginText: loginReducer,
  isConnecteds: netInfo,
  languages: languageReducer,
});
export default rootReducer;
