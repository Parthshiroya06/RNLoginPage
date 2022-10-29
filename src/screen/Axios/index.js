import React, {Component} from 'react';
import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import PushNotification from 'react-native-push-notification';
import {actionCreators} from '@actions';

import styles from './styles';

class Axios extends Component {
  constructor(props) {
    super(props);
  }

  pushLocalNotification = (emp, index) => {
    PushNotification.localNotification({
      channelId: 'Channel-Id',
      autoCancle: true,
      title: 'Hi' + emp.id,
      message: 'Hello your ' + emp.name,
      id: index,
    });
  };

  render() {
    const {isConnected} = this.props;
    console.log('isConnected', isConnected);
    return (
      <>
        {this.props.isConnected ? (
          <View style={styles.container}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => this.props.watchApi2()}>
              <Text style={styles.textValue}>Axios</Text>
            </TouchableOpacity>

            <ScrollView>
              {this.props.datasApi.map((emp, index) => (
                <TouchableOpacity
                  style={styles.touch}
                  key={emp.id}
                  onPress={() => this.pushLocalNotification(emp, index)}>
                  <View style={styles.mapView}>
                    <Text style={{margin: 2}}>{emp.postId}</Text>
                    <Text style={{margin: 2}}>{emp.id}</Text>
                    <Text style={{margin: 2}}>{emp.name}</Text>
                    <Text style={{margin: 2}}>{emp.email}</Text>
                    <Text style={{margin: 2}}>{emp.body}</Text>
                  </View>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
        ) : (
          <View style={styles.container2}>
            <Text style={styles.textValue}>
              Please Check Your Network Connection
            </Text>
          </View>
        )}
      </>
    );
  }
}

const mapStateToProps = state => {
  return {datasApi: state.dataApi, isConnected: state.isConnecteds};
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(actionCreators, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Axios);
