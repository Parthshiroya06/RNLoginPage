import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {configureStore, persistor} from '@store';
import {StackNavigator} from '@navigation';
export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Provider store={configureStore}>
        <PersistGate loading={null} persistor={persistor}>
          <StackNavigator />
        </PersistGate>
      </Provider>
    );
  }
}
