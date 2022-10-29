import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  page1: {
    flex: 1,
    borderRadius: 4,
    backgroundColor: '#fff',
    shadowOffset: 5,
    shadowColor: '#000',
    shadowRadius: 5,
    elevation: 10,
    marginBottom: 1,
  },
  container2: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FF0000',
  },

  flatList: {
    height: '100%',
    backgroundColor: '#fff',
  },

  textValue9: {
    fontSize: 15,
    fontFamily: 'serif',
    fontWeight: 'bold',
    color: 'black',
  },

  page3: {
    borderRadius: 5,
  },

  textValue9: {
    fontSize: 15,
    fontFamily: 'serif',
    fontWeight: 'bold',
    color: 'black',
  },
  titleView: {
    marginTop: 10,
    alignItems: 'center',
  },
  title: {
    fontSize: 35,
    fontWeight: 'bold',
    fontFamily: 'serif',
  },
  input: {
    flexDirection: 'row',
  },
  inputTextView1: {
    backgroundColor: '#fff',
    width: '90%',
    height: 45,
    marginLeft: 18,
    marginTop: 15,
    borderRadius: 5,
    alignItems: 'flex-start',
  },

  inputTextReverse2: {
    width: '100%',
    fontSize: 15,
    height: 45,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#FF0000',
    padding: 5,
    textAlign: 'left',
  },
  inputText: {
    width: '100%',
    fontSize: 15,
    height: 45,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#000000',
    padding: 5,
    textAlign: 'left',
  },

  button: {
    alignItems: 'center',

    backgroundColor: '#F1C40F',
    width: '90%',
    height: 50,
    marginTop: 10,
    marginLeft: 20,
    marginBottom: 5,
    marginRight: 25,
    padding: 10,
    borderRadius: 10,
  },
  button7: {
    alignItems: 'center',
    backgroundColor: '#ccdede',
    width: '100%',
    height: 45,
    marginTop: 10,
    marginLeft: 10,
    marginBottom: 10,
    marginRight: 20,
    paddingTop: 12,
    borderRadius: 10,
  },
  textValue: {
    fontSize: 21,
    fontFamily: 'serif',
    fontWeight: 'bold',
    color: 'black',
  },
  errorMassages: {
    color: '#FF0000',
    fontSize: 13,
    fontFamily: 'serif',
    marginLeft: 22,
    marginRight: 55,
  },
  errorMassages2: {
    fontSize: 13,
    color: '#FF0000',
    marginLeft: 2,
    fontFamily: 'serif',
  },
  icon: {
    position: 'absolute',
    right: 10,
  },
  inputView: function (item, index) {
    if (item == 'radioButton1') {
      return this.inputRadio;
    } else {
      return this.inputTextView1;
    }
  },
  textInputStyle: function (isError) {
    if (isError) {
      return this.inputTextReverse2;
    } else {
      return this.inputText;
    }
  },
});

export default styles;
