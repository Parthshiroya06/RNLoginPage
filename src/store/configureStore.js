import AsyncStorage from '@react-native-async-storage/async-storage';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {persistStore, persistReducer} from 'redux-persist';

import {rootReducer} from '@reducers';
import {rootsaga} from '@saga';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

//redux-saga
const sagamiddleware = createSagaMiddleware();

export const configureStore = createStore(
  persistedReducer,
  applyMiddleware(sagamiddleware),
);

sagamiddleware.run(rootsaga);

export const persistor = persistStore(configureStore);
