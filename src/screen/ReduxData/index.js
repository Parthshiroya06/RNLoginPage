import React, {Component} from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {actionCreators} from '@actions';
import {I18n} from '@languages';
class ReduxData extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      placeholder: '',
    };
  }

  componentDidMount() {
    this.state.placeholder = this.props.languageTag;
  }
  render() {
    const {placeholder} = this.state;

    const {language, placeholder2} = this.props;
    return (
      <>
        {this.props.isConnected ? (
          <View style={styles.container}>
            <TextInput
              style={{
                borderWidth: 1,
                width: '90%',
                height: 45,
              }}
              placeholder={'hbhk'}
              onChangeText={text => this.props.changeValue(text)}
              value={this.props.text}
            />
            <Text style={{marginTop: 20}}>{this.props.count}</Text>

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
    languageTag: state.languages,
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(actionCreators, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(ReduxData);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  language: {
    marginTop: 100,
    marginHorizontal: 55,
  },
  container2: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FF0000',
  },
  textValue9: {
    fontSize: 15,
    fontFamily: 'serif',
    fontWeight: 'bold',
    color: 'black',
  },
});
