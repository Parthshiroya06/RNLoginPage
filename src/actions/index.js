import * as counter from './counter';
import * as changeText from './changeText';
import * as apiData from './apiData';
import * as loginData from './loginData';
import * as netInfo from './netInfo';
import * as language from './language';

export const actionCreators = Object.assign(
  {},
  counter,
  changeText,
  apiData,
  loginData,
  netInfo,
  language,
);
