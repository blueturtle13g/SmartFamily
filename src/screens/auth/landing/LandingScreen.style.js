import { StyleSheet } from 'react-native';
import Colors from 'SmartFamily/src/constants/Colors';

export default StyleSheet.create({
  mainContainer:{
    flex: 1,
  },
  loadingIndicator:{
    width: '100%',
    height: '100%',
  },
  titleContainer:{
      flex: .8,
      justifyContent: 'flex-end',
      alignItems: 'center',
  },
  familyImage:{
      flex: 2.2,
      width: '100%',
      resizeMode: 'contain',
  },
  descriptionContainer:{
      justifyContent: 'center',
      alignItems: 'center',
      flex: 3,
  },
  description:{
      marginVertical: 2,
      fontSize: 14,
      color: '#fff',
  },
  mainDescription:{
    marginBottom: 10,
    fontSize: 16 ,
  },
  buttonContainer:{
      flex: 1,
      justifyContent: 'center',
  },

});
