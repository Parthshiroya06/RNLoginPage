import React, {Component} from 'react';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {actionCreators} from '@actions';
import {MainButtons} from '@Components';
import styles from './styles';

class Counter extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {text} = this.props;
    return (
      <>
        {this.props.isConnected ? (
          <View style={styles.page1}>
            <TextInput
              style={styles.reduxTextInput}
              placeholder={'value'}
              onChangeText={text => this.props.changeValue(text)}
              value={this.props.text}
            />
            <Text>{this.props.text}</Text>
            <Text>{this.props.count}</Text>
            <MainButtons
              onPress={() => this.props.increment(this.props.count)}
              simbole={'+'}
            />
            <MainButtons
              onPress={() => this.props.decrement(this.props.count)}
              simbole={'Reset'}
            />
            <MainButtons onPress={() => this.props.reset()} simbole={'Reset'} />
            <MainButtons
              onPress={() => this.props.resetText()}
              simbole={'Reset Profile'}
            />
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
    count: state.count,
    text: state.text,
    isConnected: state.isConnecteds,
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(actionCreators, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
