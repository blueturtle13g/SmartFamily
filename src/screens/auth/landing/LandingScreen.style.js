import { StyleSheet } from 'react-native';
import Colors from 'SmartFamily/src/constants/Colors';

export default StyleSheet.create({
  mainContainer:{
    flex: 1,
  },
  titleContainer:{
      flex: .8,
    //   backgroundColor: 'yellow',
      justifyContent: 'flex-end',
      alignItems: 'center',
  },
  title:{
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  familyImage:{
      flex: 2.2,
      width: '100%',
    //   backgroundColor: 'blue',
      resizeMode: 'contain',
  },
  descriptionContainer:{
      justifyContent: 'center',
      alignItems: 'center',
      flex: 2,
    //   backgroundColor: 'pink',
  },
  description:{
      marginVertical: 2,
      fontSize: 17,
      color: '#fff',
  },
  mainDescription:{
    marginBottom: 15,
    fontWeight: 'bold',
  },
  buttonContainer:{
      flex: .8,
    //   backgroundColor: 'green',
      paddingTop: 5,
  },

});
