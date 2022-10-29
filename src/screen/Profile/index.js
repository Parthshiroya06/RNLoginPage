import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import auth from '@react-native-firebase/auth';
import {bindActionCreators} from 'redux';
import {createStackNavigator} from '@react-navigation/stack';
import {connect} from 'react-redux';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import {getLanguages} from 'react-native-i18n';
import PushNotification from 'react-native-push-notification';
import {RNToastModule} from '@NativeModule';
import {actionCreators} from '@actions';
import {Buttons2} from '@Components';
import {I18n} from '@languages';

import styles from './styles';

class Profile extends React.Component {
  constructor(props) {
    super(props);
  }

  //firebase signOut logic
  signOut = () => {
    return auth()
      .signOut()
      .then(() => {
        return console.log('User signed out!');
      });
  };

  //google singOut fun
  signOutWithGoogle = async () => {
    try {
      await GoogleSignin.revokeAccess();
      await GoogleSignin.signOut();
      auth()
        .signOut()
        .then(() => console.log('Your are signed out!'));
    } catch (error) {
      console.error(error);
    }
  };

  //- -> using redux signOut logic
  // removeFew = () => {
  //   try {
  //     this.props.resetLoginText();
  //     this.props.resetText();
  //     this.props.reset();
  //
  //     this.props.navigation.replace('LoginScreen');
  //   } catch (e) {}
  // };

  languageHindi = () => {
    this.props.language('hi');
  };

  languageGujrati = () => {
    this.props.language('gu');
  };

  pushLocalNotification = () => {
    //  PushNotification.cancelAllLocalNotifications();
    // PushNotification.removeAllDeliveredNotifications();
    // PushNotification.localNotification({
    //   channelId: 'Channel-Id',
    //   autoCancle: true,
    //   title: 'Hii. You Have a Message',
    //   message: 'Hello your first notification',
    //   actions: '["Yes", "No"]',
    //
    //   // picture:
    //   //   'https://www.shutterstock.com/image-vector/external-link-line-icon-linear-style-1926940214',
    // });
    //
    // return RNToastModule.openNetworkSettings(() => {
    //   RNToastModule.startService();
    // });
    // return RNToastModule.openNetworkSettings(() => {
    //   RNToastModule.startAuto();
    // });

    return RNToastModule.startService();
  };

  stpoService = () => {
    return RNToastModule.stopService();
  };

  render() {
    return (
      <>
        {this.props.isConnected ? (
          <View style={styles.container}>
            <TouchableOpacity
              style={styles.button4}
              title="GoogleLogout"
              onPress={() => this.signOutWithGoogle()}>
              <Text style={styles.textValue2}>GLogout</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button4}
              title="EmailLogout"
              onPress={() => this.signOut()}>
              <Text style={styles.textValue2}>ELogout</Text>
            </TouchableOpacity>
            <View>
              <Text>Name:{this.props.userNames}</Text>
              <Text>password: {this.props.text2}</Text>
            </View>
            <View style={styles.page1}>
              <View style={styles.page2}>
                <Buttons2
                  onPress={() => this.languageHindi()}
                  simbole={'Hindi'}
                />
                <Buttons2
                  onPress={() => this.languageGujrati()}
                  simbole={'Gujrati'}
                />
              </View>
              <View style={styles.language}>
                {['how', 'boiledEgg', 'softBoiledEgg', 'choice'].map((v, i) => {
                  return (
                    <Text key={i} style={styles.textValue1}>
                      {I18n.t(v)}
                    </Text>
                  );
                })}
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 20,
              }}>
              <Buttons2
                onPress={() => this.pushLocalNotification()}
                simbole={'startService'}
              />
              <Buttons2
                onPress={() => this.stpoService()}
                simbole={'stopService'}
              />
            </View>
          </View>
        ) : (
          <View style={styles.container2}>
            <Text style={styles.textValue9}>
              Please Check Your Network Connection
            </Text>
          </View>
        )}
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    userNames: state.loginText.username,
    text2: state.loginText.password,
    isConnected: state.isConnecteds,
    languageTag: state.languages,
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(actionCreators, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
