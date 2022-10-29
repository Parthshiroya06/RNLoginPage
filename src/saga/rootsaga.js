import {call, all, fork} from 'redux-saga/effects';
import {watchApiData, watchAxiosData} from './watchApiData';

export default function* rootsaga() {
  return yield all([watchApiData(), watchAxiosData()]);
}
