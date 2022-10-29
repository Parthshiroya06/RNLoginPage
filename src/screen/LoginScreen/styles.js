import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  page1: {
    flex: 1,
    borderRadius: 5,
    justifyContent: 'center',
    backgroundColor: '#fff',
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
  page3: {
    width: '100%',
    alignItems: 'center',
  },
  page4: {
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
  },

  titleView: {
    marginTop: 150,

    alignItems: 'center',
  },
  title: {
    fontSize: 35,
    fontWeight: 'bold',
    fontFamily: 'serif',
  },

  inputTextView1: {
    backgroundColor: '#fff',
    width: '90%',
    marginTop: 10,
    height: 45,
    alignItems: 'flex-start',
  },

  inputTextReverse2: {
    textAlign: 'left',
    width: '100%',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#FF0000',
    height: 45,
    padding: 5,
    fontSize: 15,
  },
  inputText: {
    textAlign: 'left',
    width: '100%',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#000000',
    height: 45,
    padding: 5,
    fontSize: 15,
  },
  button: {
    alignItems: 'center',
    marginTop: 5,
    backgroundColor: '#FE9A2E',
    width: '90%',
    height: 50,
    marginLeft: 15,
    padding: 10,
    borderRadius: 10,
  },
  buttonG: {
    alignItems: 'center',
    marginTop: 5,

    width: '90%',
    height: 55,
    marginLeft: 15,
    padding: 10,
    borderRadius: 10,
  },
  button5: {
    alignItems: 'center',
    marginTop: 5,
    backgroundColor: '#FE9A2E',
    width: '43%',
    height: 50,
    marginLeft: 15,
    padding: 10,
    borderRadius: 10,
  },
  button4: {
    width: '25%',
    height: 25,
    marginTop: 2,
    padding: 2,
  },

  textValue: {
    fontSize: 23,
    fontFamily: 'serif',
    fontWeight: 'bold',
    color: 'black',
  },
  textValue2: {
    fontWeight: 'bold',
    fontFamily: 'serif',
    fontSize: 14,
    color: '#0080FF',
    marginRight: 25,
    textDecorationLine: 'underline',
  },
  textValue3: {
    paddingTop: 5,
  },
  inputTextValueView: {
    justifyContent: 'center',
    flexDirection: 'row',
    marginLeft: 10,
  },

  errorMassages: {
    color: '#FF0000',
    fontSize: 13,
    fontFamily: 'serif',
    marginLeft: 2,
  },
  errorText: {
    width: '90%',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    flexDirection: 'row',
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
