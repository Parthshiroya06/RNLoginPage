import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Data,
} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import PushNotification from 'react-native-push-notification';
import {actionCreators} from '@actions';

class FatchApi extends React.Component {
  constructor(props) {
    super(props);
  }

  pushLocalNotification = (emp, index) => {
    PushNotification.cancelAllLocalNotifications();

    PushNotification.localNotification({
      channelId: 'Channel-Id',
      autoCancle: true,
      title: emp.name,
      message: ' our company name is ' + emp.company.name,
      id: index,
      smallIcon: 'ic_launcher_transparent',
      largeIcon: 'ic_launcher_round',
    });
    PushNotification.localNotificationSchedule({
      title: 'Alarm',
      repeatTime: 3,
      actions: ['yes', 'no'],
      date: new Date(Date.now() + 5 * 1000),
      reply_placeholder_text: 'hello',
      reply_button_text: 'Reply',
      allowWhileIdle: true,
      message: ' our company name is ' + emp.company.name,
    });
  };

  render() {
    return (
      <>
        {this.props.isConnected ? (
          <View style={styles.container}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => this.props.watchApi()}>
              <Text style={styles.textValue}>async Api</Text>
            </TouchableOpacity>
            <ScrollView>
              {this.props.api.map((emp, index) => (
                <TouchableOpacity
                  style={styles.touch}
                  key={emp.id}
                  onPress={() => this.pushLocalNotification(emp, index)}>
                  <View style={styles.mapView}>
                    <Text style={{margin: 2, marginTop: 30}}>Id:{emp.id}</Text>
                    <Text style={{margin: 2}}>Name: {emp.name}</Text>
                    <Text style={{margin: 2}}>UserName: {emp.username}</Text>
                    <Text style={{margin: 2}}>Email: {emp.email}</Text>
                    <Text style={{margin: 2}}>
                      Street: {emp.address.street}
                    </Text>
                    <Text style={{margin: 2}}>Suite: {emp.address.suite}</Text>
                    <Text style={{margin: 2}}>City: {emp.address.city}</Text>
                    <Text style={{margin: 2}}>
                      ZipCode: {emp.address.zipcode}
                    </Text>
                    <Text style={{margin: 2}}>Lat: {emp.address.geo.lat}</Text>
                    <Text style={{margin: 2}}>Log: {emp.address.geo.lng}</Text>
                    <Text style={{margin: 2}}>Phone: {emp.phone}</Text>
                    <Text style={{margin: 2}}>WebSite: {emp.website}</Text>
                    <Text style={{margin: 2}}>
                      CompanyName: {emp.company.name}
                    </Text>
                    <Text style={{margin: 2}}>
                      CatchPhrase:{emp.company.catchPhrase}
                    </Text>
                    <Text style={{marginBottom: 10}}>Bs:{emp.company.bs}</Text>
                  </View>
                </TouchableOpacity>
              ))}
            </ScrollView>
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
  return {api: state.data, isConnected: state.isConnecteds};
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(actionCreators, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(FatchApi);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    alignItems: 'center',
    marginTop: 5,
    backgroundColor: '#FE9A2E',
    width: '80%',
    height: 50,
    marginLeft: 15,
    padding: 10,
    borderRadius: 10,
  },
  mapView: {
    flex: 1,
  },

  touch: {
    shadowColor: 'black',
    elevation: 1,
    margin: 5,
    borderRadius: 5,
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
