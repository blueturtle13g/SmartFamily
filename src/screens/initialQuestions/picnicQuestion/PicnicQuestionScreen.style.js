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
    marginBottom: 10,
  },
  familyImage:{
      flex: 2.2,
      width: '100%',
      resizeMode: 'contain',
  },
  questionContainer:{
    justifyContent: 'space-between',
    paddingVertical: 15,
    alignItems: 'center',
    flex: 1.8,
  },
  question:{
    marginVertical: 2,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  description:{
    fontWeight: 'normal',
    fontSize: 17,
  },
  buttonContainer:{
    flex: 1,
  },
  dotsContainer:{
    flex: .8,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
});