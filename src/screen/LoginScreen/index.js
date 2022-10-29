import React, {Component} from 'react';
import {
  Keyboard,
  NativeModule,
  ScrollView,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  TouchableOpacity,
  View,
} from 'react-native';

import auth from '@react-native-firebase/auth';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import {actionCreators} from '@actions';
import {RNToastModule} from '@NativeModule';
import {localizetion} from '@languages';
import {fieldObject, formItems} from '@constants';
import {Buttons2} from '@Components';

import styles from './styles';

import {isValid} from '@utils';

class LoginScreen extends React.Component {
  constructor(props) {
    super(props);

    RNToastModule.openNetworkSettings();

    this.state = {
      userName: {
        ...fieldObject,
        placeholder: 'Enter_Name',
      },
      password: {
        ...fieldObject,
        placeholder: 'Enter_Password',
      },
      confirmCode: null,
    };

    this.input = {};
  }

  checkValidation(index) {
    return new Promise((resolve, reject) => {
      if (index > -1) {
        var state_object = this.state;

        switch (index) {
          case 1:
            const {password} = this.state;
            if (isValid.isEmpty(password.value)) {
              state_object['password'] = {
                ...password,
                isError: true,
                errorText: 'Please_EnterPassword',
              };
            } else if (isValid.validPasswordLength(password.value)) {
              state_object['password'] = {
                ...password,
                isError: true,
                errorText: 'Enter_ValidPassword',
              };
            }

          case 0:
            const {userName} = this.state;
            if (isValid.isEmpty(userName.value)) {
              state_object['userName'] = {
                ...userName,
                isError: true,
                errorText: 'Please_EnterName',
              };
            }

          default:
            this.setState(state_object, resolve());
        }
      }
    });
  }

  onPressbutton2 = () => {
    this.checkValidation(1)
      .then(() => {
        const {userName, password} = this.state;
        if (!userName.isError && !password.isError) {
          this.props.logedIn({
            isLogin: true,
            username: userName.value,
            password: password.value,
          });
          this.props.navigation.replace('TabNavigator');
        } else {
          return false;
        }
      })
      .catch(e => {
        return this.setState({isError: true});
      });
    Keyboard.dismiss();
  };

  // Email & password
  onPressAuth = () => {
    if (
      !isValid.isEmpty(this.state.userName.value) &&
      !isValid.isEmpty(this.state.password.value) &&
      !isValid.validPasswordLength(this.state.password.value)
    ) {
      return this.auths();
    } else {
      return this.checkValidation(1);
    }
  };

  //Firebase using Email & Password
  auths = () => {
    return auth()
      .createUserWithEmailAndPassword(
        this.state.userName.value,
        this.state.password.value,
      )
      .then(() => {
        const {userName, password} = this.state;
        if (!userName.isError && !password.isError) {
          this.props.logedIn({
            isLogin: true,
            username: userName.value,
            password: password.value,
          });
          this.props.navigation.replace('TabNavigator');
        }
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }
        console.log(error);
      });
  };

  // //PhoneNumber Validition
  // onLogin = async () => {
  //   return await auth()
  //     .signInWithPhoneNumber(this.state.userName.value)
  //     .then(confirmCode => {
  //       return this.setState({confirmCode});
  //       console.log('you have a login');
  //     })
  //     .catch(e => {
  //       console.log('something wrong!!', e);
  //     });
  // };
  //
  // //OPT varification
  // otp = async () => {
  //   const {confirmCode} = this.state;
  //   const {value} = this.state.password;
  //   const otp = await confirmCode.confirm(value).then(user => {
  //     return this.props.navigation.replace('TabNavigator');
  //     console.log(' You have login');
  //     return otp;
  //   });
  // };

  //Google logedIn
  googleLogin = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const {idToken, accessToken} = await GoogleSignin.signIn();
      const credential = auth.GoogleAuthProvider.credential(
        idToken,
        accessToken,
      );
      await auth().signInWithCredential(credential);
    } catch (error) {
      if (error.code == statusCodes.SIGN_IN_CANCELLED) {
        console.log('cancle');
      } else if (error.code === statusCodes.IN_PROGRESS) {
        console.log('Signin in progress');
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        console.log('PLAY_SERVICES_NOT_AVAILABLE');
      } else {
        return false;
      }
    }

    // // Get the users ID token
    // await GoogleSignin.hasPlayServices();
    // const {idToken} = await GoogleSignin.signIn();
    //
    // // Create a Google credential with the token
    // const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    //
    // // Sign-in the user with the credential
    // return auth().signInWithCredential(googleCredential);
  };

  okGoogle = () => {
    if (this.googleLogin()) {
      return this.props.navigation.replace('TabNavigator');
    }
    return false;
  };
  changeValue = (value, key) => {
    return new Promise((resolve, reject) => {
      var state_object = {};

      state_object[key] = {...this.state[key], ...value};

      this.setState(state_object, () => resolve());
    });
  };

  onSubmitEditing(index) {
    const ref = this.input[`_${index + 1}`];

    if (ref) {
      ref.focus();
    }
  }

  _renderFormItem = (item, index) => {
    const {isError, errorText} = this.state[item];

    return (
      <View style={styles.page3} key={index}>
        <View style={styles.inputTextView1}>
          {this.__renderInputs(item, index)}
        </View>
        <View style={styles.errorText}>
          <Text style={styles.errorMassages}>
            {isError ? localizetion(errorText) : ''}
          </Text>
        </View>
      </View>
    );
  };

  __renderInputs = (item, index) => {
    const {value, placeholder, isError, isFocus} = this.state[item];

    if (item == 'userName' || item == 'password') {
      return (
        <TextInput
          style={styles.textInputStyle(isError)}
          placeholder={localizetion(placeholder)}
          ref={r => (this.input[`_${index}`] = r)}
          secureTextEntry={item == 'password' ? true : false}
          returnKeyType={item == 'password' ? 'done' : 'next'}
          blurOnSubmit={item == 'password' ? true : false}
          onSubmitEditing={() => this.onSubmitEditing(index)}
          onEndEditing={() => this.checkValidation(index)}
          onFocus={() => this.checkValidation(index - 1)}
          onBlur={() => this.checkValidation(index - 1)}
          onChangeText={text =>
            this.changeValue({isError: false, value: text}, item)
          }
          value={value}
        />
      );
    }
  };
  languageHindi = () => {
    this.props.language('hi');
    this.setState({});
  };

  signOutWithGoogle = async () => {
    try {
      await GoogleSignin.revokeAccess();
      await GoogleSignin.signOut();
    } catch (error) {
      console.error(error);
    }
  };
  languageGujrati = () => {
    this.props.language('gu');
    this.setState({});
  };

  render() {
    const {navigate} = this.props.navigation;

    return (
      <>
        {this.props.isConnected ? (
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.titleView}>
              <Text style={styles.title}>{localizetion('login')}</Text>
            </View>
            {formItems.map((item, index) => this._renderFormItem(item, index))}

            <TouchableOpacity
              style={styles.button}
              onPress={() => this.onPressAuth()}>
              <Text style={styles.textValue}>{localizetion('login')}</Text>
            </TouchableOpacity>

            <GoogleSigninButton
              style={styles.buttonG}
              size={GoogleSigninButton.Size.Wide}
              color={GoogleSigninButton.Color.Dark}
              onPress={() => {
                this.googleLogin().then(() => {
                  return this.props.navigation.replace('TabNavigator');
                });
              }}
            />

            <View style={styles.inputTextValueView}>
              <Text style={styles.textValue3}>
                {localizetion('signup_Text')}
              </Text>
              <TouchableOpacity
                style={styles.button4}
                title="SignupScreen"
                onPress={() => this.props.navigation.navigate('SignupScreen')}>
                <Text style={styles.textValue2}>{localizetion('signup')}</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.page4}>
              <Buttons2
                onPress={() => this.languageHindi()}
                simbole={'Hindi'}
              />
              <Buttons2
                onPress={() => this.languageGujrati()}
                simbole={'Gujrati'}
              />
            </View>
          </ScrollView>
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
    isConnected: state.isConnecteds,
    languageTag: state.languages,
    userNames: state.loginText.username,
    text2: state.loginText.password,
    Login: state.loginText.logedIn,
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(actionCreators, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
