import { StyleSheet } from 'react-native';
import Colors from 'SmartFamily/src/constants/Colors';

export default StyleSheet.create({
  mainContainer:{
    flex: 1,
  },
  inputsContainer:{
    flex: 2.3,
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
    justifyContent: 'center',
  },
  borderContainer:{
    position: 'absolute',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    paddingBottom: 10,
    overflow: 'hidden',
  },
  border:{
    height: 1,
    width: '50%',
    backgroundColor: '#fff',
  },
  borderText:{
    color: '#fff',
    marginHorizontal: 15,
  }
});
