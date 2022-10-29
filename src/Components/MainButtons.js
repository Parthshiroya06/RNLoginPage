import React from 'react';
import {StyleSheet, TouchableOpacity, Text, View} from 'react-native';

const MainButtons = props => {
  return (
    <>
      <TouchableOpacity style={{...styles.button}} onPress={props.onPress}>
        <Text style={styles.textValue2}>{props.simbole}</Text>
      </TouchableOpacity>
    </>
  );
};

export default MainButtons;

const styles = StyleSheet.create({
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
  textValue2: {
    fontSize: 25,
    fontFamily: 'serif',
    fontWeight: 'bold',
    color: 'black',
  },
});
