import { StyleSheet } from 'react-native';
import Colors from 'SmartFamily/src/constants/Colors';

export default StyleSheet.create({
  mainContainer:{
    flex: 1,
  },
  titleContainer:{
      flex: .8,
      justifyContent: 'flex-end',
      alignItems: 'center',
  },
  title:{
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 14,
  },
  familyImage:{
      flex: 2.2,
      width: '100%',
      resizeMode: 'contain',
  },
  backIcon:{
    position: 'absolute',
    right: 25,
    bottom: 10,
  }
});