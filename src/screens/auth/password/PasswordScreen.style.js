import { StyleSheet } from 'react-native';
import Colors from 'SmartFamily/src/constants/Colors';
import Layout from 'SmartFamily/src/constants/Layout';

export default StyleSheet.create({
  mainContainer:{
    flex: 1,
  },
  inputsContainer:{
    flex: 2,
    paddingTop: 10,
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '85%',
    alignSelf: 'center',
  },
  progressBarContainer:{
    flex: .5,
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
    fontSize: 10,
  }
});
