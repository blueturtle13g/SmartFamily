import { StyleSheet } from 'react-native';
import Colors from 'SmartFamily/src/constants/Colors';

export default StyleSheet.create({
  mainContainer:{
    flex: 1,
  },
  inputContainer:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputWrapper:{
    textAlign: 'center',
    paddingVertical: 9,
    width: '88%',
    height: 38,
    borderRadius: 3,
    backgroundColor: '#fff',
    flexDirection: 'row',
  },
  textInput:{
    // backgroundColor: '#ccc',
    height: '100%',
    width: '65%',
    textAlign: 'right',
    textAlignVertical: 'center',
    padding: 0,
    paddingRight: 15,
    borderRightWidth: 1,
    borderColor: '#000',
    fontWeight: 'bold',

  },
  inputLabel:{
    height: '100%',
    width: '35%',
    flexDirection: 'row',
    // backgroundColor: 'blue',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  progressBarContainer:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer:{
    flex: 1,
    justifyContent: 'center',
  }
});
