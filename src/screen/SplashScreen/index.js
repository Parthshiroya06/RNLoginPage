import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import auth from '@react-native-firebase/auth';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {CommonActions} from '@react-navigation/native';

import {actionCreators} from '@actions';

class SplashScreen extends Component {
  constructor(props) {
    super(props);
  }

  autoSignUp = () => {
    auth().onAuthStateChanged(user => {
      if (user) {
        this.props.navigation.dispatch(
          CommonActions.reset({
            index: 0,
            routes: [{name: 'TabNavigator'}],
          }),
        );
      } else {
        this.props.navigation.dispatch(
          CommonActions.reset({
            index: 0,
            routes: [{name: 'LoginScreen'}],
          }),
        );
      }
    });
  };

  // Redux Auto login
  // loginInfo() {
  //   this.props.Login
  //     ? this.props.navigation.dispatch(
  //         CommonActions.reset({
  //           index: 0,
  //           routes: [{name: 'TabNavigator'}],
  //         }),
  //       )
  //     : this.props.navigation.dispatch(
  //         CommonActions.reset({
  //           index: 0,
  //           routes: [{name: 'LoginScreen'}],
  //         }),
  //       );
  // }

  componentDidMount() {
    setTimeout(() => this.autoSignUp(), 3000);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>I'm the SplashScreen component</Text>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {Login: state.loginText.isLogin};
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(actionCreators, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(SplashScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
