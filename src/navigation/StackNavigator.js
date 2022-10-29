import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {createStackNavigator} from '@react-navigation/stack';
import {connect} from 'react-redux';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import {NavigationContainer} from '@react-navigation/native';
import NetInfo from '@react-native-community/netinfo';
import PushNotification from 'react-native-push-notification';
import {actionCreators} from '@actions';
import {I18n} from '@languages';
import {RNToastModule} from '@NativeModule';
import {LoginScreen, SignupScreen, SplashScreen, NativeModule} from '@screen';
import TabNavigator from './TabNavigator';

const Stack = createStackNavigator();

class StackNavigator extends React.Component {
  constructor(props) {
    super(props);
    this.unsubscribe();
    this.pushLocalNotification();
    this.googleConfigur();
  }

  ///for NetInfo
  unsubscribe = () => {
    return NetInfo.addEventListener(state => {
      if (state.isConnected) {
        return this.props.netinfo(true);
      } else {
        return this.props.netinfo(false);
      }
    });
  };

  //for Local Notification
  pushLocalNotification = () => {
    PushNotification.configure({
      onNotification: function (notification) {
        console.log('Notification', notification);
      },

      popInitialnotification: true,
      requestPermissions: Platform.OS === 'ios',
      senderID: '572830587011',
    });
    PushNotification.createChannel(
      {
        channelId: 'Channel-Id',
        channelName: 'My Channel',
      },
      created => console.log(`createChannel returned '${created}`),
    );
  };

  //for Google Login
  googleConfigur = () => {
    GoogleSignin.configure({
      scopes: [],
      webClientId:
        '572830587011-ppc9ionk2qvjamri7pd00107fqofeolf.apps.googleusercontent.com',
      offlineAccess: false,
    });
  };

  render() {
    return (
      <NavigationContainer independent={true}>
        <Stack.Navigator
          initialRouteName="splashScreen"
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="splashScreen" component={SplashScreen} />
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="SignupScreen" component={SignupScreen} />
          <Stack.Screen name="TabNavigator" component={TabNavigator} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
const mapStateToProps = state => {
  return {
    isConnected: state.isConnecteds,
    userNames: state.loginText.username,
    text2: state.loginText.password,
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(actionCreators, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(StackNavigator);
