import { StyleSheet } from 'react-native';
import Colors from 'SmartFamily/src/constants/Colors';

export default StyleSheet.create({
  mainContainer:{
    flex: 1,
  },
  titleContainer:{
    flex: .8,
    alignItems: 'center',
    flexDirection: 'row',
  },
  title:{
    fontSize: 20,
    color: '#fff',
    fontFamily: 'iranSans',
  },
  familyImage:{
      flex: 2.2,
      width: '100%',
      resizeMode: 'contain',
  },
  backIconContainer:{
    position: 'absolute',
    right: 5,
    height: 50,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerBlock:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});