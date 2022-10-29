import React, {Component} from 'react';
import {
  FlatList,
  KeyboardAvoidingView,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import auth from '@react-native-firebase/auth';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import firestore from '@react-native-firebase/firestore';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import moment from 'moment';
import {RadioButton} from 'react-native-paper';
import {actionCreators} from '@actions';
import {fieldObject, formItems2} from '@constants';
import {I18n, localizetion} from '@languages';

import {isValid} from '@utils';

import styles from './styles';
class SignupScreen extends React.Component {
  constructor(props) {
    super(props);
    this.dbRef = firestore().collection('users');
    this.state = {
      userName: {
        ...fieldObject,
        maxLength: 15,
        returnKeyType: 'next',
        blurOnSubmit: false,
        placeholder: 'Enter_Name',
      },
      password: {
        ...fieldObject,
        maxLength: 15,
        returnKeyType: 'next',
        blurOnSubmit: false,
        secureTextEntry: true,
        placeholder: 'Enter_Password',
      },
      mobileNumber: {
        ...fieldObject,
        maxLength: 10,
        blurOnSubmit: false,
        returnKeyType: 'next',
        keyboardType: 'numeric',

        placeholder: 'Enter_Number',
      },
      email: {
        ...fieldObject,
        maxLength: 50,
        blurOnSubmit: false,
        returnKeyType: 'next',
        placeholder: 'Enter_Email',
      },
      address: {
        ...fieldObject,
        maxLength: 100,
        blurOnSubmit: false,
        returnKeyType: 'next',
        placeholder: 'Enter_Address',
      },
      city: {
        ...fieldObject,
        maxLength: 15,
        blurOnSubmit: false,
        returnKeyType: 'next',
        placeholder: 'Enter_City',
      },
      states: {
        ...fieldObject,
        maxLength: 15,
        blurOnSubmit: true,
        returnKeyType: 'done',
        placeholder: 'Enter_State',
      },
      radioButton1: {
        ...fieldObject,
      },

      select_date: {
        ...fieldObject,
      },

      shouldShowPicker: false,
    };

    this.input = {};
  }

  checkValidation(index) {
    return new Promise((resolve, reject) => {
      if (index > -1) {
        var state_object = this.state;

        switch (index) {
          case 8:
            const {select_date} = this.state;
            if (isValid.isEmpty(select_date.value)) {
              state_object['select_date'] = {
                ...select_date,
                isError: true,
                errorText: 'Please_EnterDate',
              };
            }

          case 7:
            const {radioButton1} = this.state;
            if (radioButton1 !== '') {
              state_object['radioButton1'] = {
                ...radioButton1,
              };
            }

          case 6:
            const {states} = this.state;

            if (isValid.isEmpty(states.value)) {
              state_object['states'] = {
                ...states,
                isError: true,
                errorText: 'Please_EnterState',
              };
            }

          case 5:
            const {city} = this.state;
            if (isValid.isEmpty(city.value)) {
              state_object['city'] = {
                ...city,
                isError: true,
                errorText: 'Please_EnterCity',
              };
            }

          case 4:
            const {address} = this.state;
            if (isValid.isEmpty(address.value)) {
              state_object['address'] = {
                ...address,
                isError: true,
                errorText: 'Please_EnterAddress',
              };
            }

          case 3:
            const {mobileNumber} = this.state;
            if (isValid.isEmpty(mobileNumber.value)) {
              state_object['mobileNumber'] = {
                ...mobileNumber,
                isError: true,
                errorText: 'PLease_EnterMobileNumber',
              };
            } else if (isValid.validPhone(mobileNumber.value)) {
              state_object['mobileNumber'] = {
                ...mobileNumber,
                isError: true,
                errorText: 'Invalid_MobileNumber',
              };
            } else if (isValid.validPhoneLength(mobileNumber.value)) {
              state_object['mobileNumber'] = {
                ...mobileNumber,
                isError: true,
                errorText: 'Invalid_MobileNumberLength',
              };
            }

          case 2:
            const {email, emailFormat} = this.state;
            if (isValid.isEmpty(email.value)) {
              state_object['email'] = {
                ...email,
                isError: true,
                errorText: 'Please_EnterEmail',
              };
            } else if (isValid.validEmail(email.value)) {
              state_object['email'] = {
                ...email,
                isError: true,
                errorText: 'Invalid_EmailFormat',
              };
            }

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
            this.setState(state_object, () => resolve());
        }
      }
    });
  }

  onChangeDateTime(selectedDate) {
    this.setState({shouldShowPicker: false});
    const {mode} = this.state;

    let value;
    if (mode == 'select_date') {
      value = moment(selectedDate).format('DD-MM-YYYY');
    }

    this.changeValue(
      {isError: false, selectedValue: selectedDate, value: value},
      this.state.mode,
    );
  }

  onPressbutton2() {
    this.checkValidation(8).then(() => {
      const {
        userName,
        password,
        email,
        mobileNumber,
        address,
        city,
        states,
        select_date,
      } = this.state;
      if (
        !userName.isError &&
        !password.isError &&
        !email.isError &&
        !mobileNumber.isError &&
        !address.isError &&
        !city.isError &&
        !states.isError &&
        !select_date.isError
      ) {
        this.props.navigation.navigate('LoginScreen');
      }
    });
  }

  // natigate firesoter using singpage to loginpage
  onPressSign = () => {
    const {
      userName,
      password,
      email,
      mobileNumber,
      address,
      city,
      states,
      select_date,
    } = this.state;
    if (
      !isValid.isEmpty(this.state.userName.value) &&
      !isValid.isEmpty(this.state.password.value) &&
      !isValid.validPasswordLength(this.state.password.value)
    ) {
      this.onFireStore();
    } else {
      return this.checkValidation(8);
    }
  };

  //firestore using database
  onFireStore = () => {
    return auth()
      .createUserWithEmailAndPassword(
        this.state.email.value,
        this.state.password.value,
      )
      .then(response => {
        const uid = response.user.uid;

        const {userName, password, email, mobileNumber, address, city, states} =
          this.state;

        const data = {
          id: uid,
          name: userName.value,
          email: email.value,
          mobileNumber: mobileNumber.value,
          address: address.value,
          city: city.value,
          state: states.value,
        };
        this.dbRef
          .doc(uid)
          .set(data)
          .then(() => {
            return this.props.navigation.replace('LoginScreen');
          });
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }
        console.log(error);
      });
  };

  changeValue(value, key) {
    return new Promise((resolve, reject) => {
      var state_object = {};
      state_object[key] = {...this.state[key], ...value};
      this.setState(state_object, () => resolve());
    });
  }

  onSubmitEditing(index) {
    const ref = this.input[`_${index + 1}`];
    if (ref) {
      ref.focus();
    }
  }

  _renderFormItem = (item, index) => {
    const {isError, errorText} = this.state[item];

    return (
      <View style={styles.page3}>
        <View style={styles.inputView(item, index)}>
          {this._renderSignup(item, index)}
        </View>
        <Text style={styles.errorMassages}>
          {isError ? localizetion(errorText) : ''}
        </Text>
      </View>
    );
  };

  _renderSignup = (item, index) => {
    const {
      value,
      placeholder,
      isError,
      maxLength,
      returnKeyType,
      blurOnSubmit,
      keyboardType,
      secureTextEntry,
      isFocus,
    } = this.state[item];
    switch (item) {
      case 'userName':
      case 'password':
      case 'email':
      case 'mobileNumber':
      case 'address':
      case 'city':
      case 'states':
        return (
          <TextInput
            style={styles.textInputStyle(isError)}
            placeholder={localizetion(placeholder)}
            ref={r => (this.input[`_${index}`] = r)}
            returnKeyType={returnKeyType}
            blurOnSubmit={blurOnSubmit}
            secureTextEntry={secureTextEntry}
            keyboardType={keyboardType}
            maxLength={maxLength}
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

      case 'radioButton1':
        return (
          <RadioButton.Group
            onValueChange={value => this.setState({value: value})}
            value={this.state.value}>
            <RadioButton.Item
              label="Male"
              value="first"
              position="leading"
              labelStyle={{textAlign: 'left', fontFamily: 'serif'}}
            />
            <RadioButton.Item
              label="Female"
              value="second"
              position="leading"
              labelStyle={{textAlign: 'left', fontFamily: 'serif'}}
            />
          </RadioButton.Group>
        );
      case 'select_date':
        return (
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              width: '100%',
              marginBottom: 10,
            }}>
            <TouchableOpacity
              style={styles.button7}
              onPress={() =>
                this.checkValidation(index - 1).then(() =>
                  this.setState({shouldShowPicker: true, mode: item}),
                )
              }>
              <Text
                style={{
                  fontFamily: 'serif',
                  fontWeight: 'bold',
                }}>
                {value == '' ? (
                  <View style={{flexDirection: 'row'}}>
                    <Text style={{fontFamily: 'serif', marginRight: 10}}>
                      {localizetion('dateText')}
                    </Text>
                    <MaterialCommunityIcons
                      name={'calendar'}
                      size={25}
                      color={'#e24848'}
                    />
                  </View>
                ) : (
                  value
                )}
              </Text>
            </TouchableOpacity>
          </View>
        );

      default:
        break;
    }
  };

  render() {
    return (
      <>
        {this.props.isConnected ? (
          <View style={styles.page1}>
            <KeyboardAvoidingView>
              <FlatList
                style={styles.flatList}
                data={formItems2}
                //  this is may improve scroll performance for large Lists in android becuse on Android the default value is true.

                removeClippedSubviews={false}
                renderItem={({item, index}) =>
                  this._renderFormItem(item, index)
                }
                ListFooterComponent={
                  <TouchableOpacity
                    style={styles.button}
                    onPress={() => this.onPressbutton2()}>
                    <Text style={styles.textValue}>
                      {localizetion('signup')}
                    </Text>
                  </TouchableOpacity>
                }
                ListHeaderComponent={
                  <Text style={styles.title}>{localizetion('signup')}</Text>
                }
                ListFooterComponentStyle={{
                  alignItems: 'center',
                }}
                ListHeaderComponentStyle={{
                  alignItems: 'center',
                }}
                showsVerticalScrollIndicator={false}
                keyExtractor={(item, index) => index.toString()}
              />
              <DateTimePickerModal
                minimumDate={new Date()}
                isVisible={this.state.shouldShowPicker}
                date={new Date()}
                mode={'date'}
                onConfirm={selectedDate => this.onChangeDateTime(selectedDate)}
                onCancel={() => this.setState({shouldShowPicker: false})}
              />
            </KeyboardAvoidingView>
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
    isConnected: state.isConnecteds,
    languageTag: state.languages,
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(actionCreators, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(SignupScreen);
