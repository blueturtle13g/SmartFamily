import { StyleSheet } from 'react-native';
import Colors from 'SmartFamily/src/constants/Colors';

export default StyleSheet.create({
  mainContainer:{
    flex: 1,
    backgroundColor: Colors.white1,
  },
  buttonLoading:{
    marginLeft: 5,
  },
  inputContainer:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  picker:{
    width: '90%',
    borderWidth: .5,
    textAlign: 'center',
    marginVertical: 10,
  },
  textInput:{
    width: '90%',
    borderWidth: .5,
    textAlign: 'center',
    marginVertical: 10,
  },
  submitButton:{
    width: '90%',
    height: 50,
    backgroundColor: Colors.grey1,
    marginBottom: 30,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  submitText:{
    color: Colors.white1,
    fontSize: 18,
  },
  loadingIndicator:{
    color: "#2b2b2b",
    height: '100%',
    width: '100%',
  },
});
