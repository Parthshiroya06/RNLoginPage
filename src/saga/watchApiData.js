import {call, put, takeLatest, takeEvery} from 'redux-saga/effects';
import {setApiData, watchApi, watchApi2, setApiData2} from '@actions';
import {getapiData} from './api';
import axios from 'axios';

function* fetch() {
  try {
    const data = yield getapiData();

    return yield put({type: 'apiData', data: data});
  } catch (e) {
    console.log('error', e);
  }
}

function* axioses() {
  try {
    const axiosData = yield call(
      axios.get,
      'https://jsonplaceholder.typicode.com/comments',
    );
    const axiosData2 = axiosData.data;
    return yield put({type: 'apiData2', dataApi: axiosData2});
  } catch {}
}

export function* watchAxiosData() {
  return yield takeEvery('watchApi2', axioses);
}

export function* watchApiData() {
  return yield takeEvery('watchApi', fetch);
}
