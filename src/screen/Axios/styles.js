import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  container2: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FF0000',
  },
  textValue: {
    fontSize: 15,
    fontFamily: 'serif',
    fontWeight: 'bold',
    color: 'black',
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
});
export default styles;
