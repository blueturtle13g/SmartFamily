import { StyleSheet } from 'react-native';
import Colors from 'SmartFamily/src/constants/Colors';
import Layout from 'SmartFamily/src/constants/Layout';

export default StyleSheet.create({
  mainContainer:{
    flex: 1,
  },
  inputContainer:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  progressBarContainer:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer:{
    flex: 1,
    alignItems: 'center',
  },
  inputDescription:{
    textAlign: 'left',
    color: '#fff',
    width: '76%',
    textAlign: 'right',
    marginTop: 3,
    fontSize: 13,
  }
});
