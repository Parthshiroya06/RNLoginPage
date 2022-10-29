import React from 'react';
import {StyleSheet, TouchableOpacity, Text, View} from 'react-native';

const Buttons2 = props => {
  return (
    <>
      <TouchableOpacity
        style={{...styles.button, ...props.style}}
        onPress={props.onPress}>
        <Text style={styles.textValue}>{props.simbole}</Text>
      </TouchableOpacity>
    </>
  );
};

export default Buttons2;

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    marginTop: 5,
    backgroundColor: '#FE9A2E',
    width: 155,

    height: 50,
    marginLeft: 15,
    padding: 10,
    borderRadius: 10,
  },
  textValue: {
    fontSize: 22,
    fontFamily: 'serif',
    fontWeight: 'bold',
    color: 'black',
  },
});
