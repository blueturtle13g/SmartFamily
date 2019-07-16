import { StyleSheet } from 'react-native';
import Colors from '../../../../../constants/Colors';

export default StyleSheet.create({
  mainContainer:{
    flex: 1,
    backgroundColor: Colors.white1,
  },
  topContainer:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title:{
    fontSize: 20,
    fontWeight: 'bold',
  },
  bottomContainer:{
    flex: 4,
    paddingHorizontal: 15,
  },
  optionsContainer:{
    borderWidth: .5,
    borderRadius: 10,
  },
  switchContainer:{
    height: 50,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    marginVertical: 10,
    alignItems: 'center',

  },
  switchTitle:{
    fontSize: 17,
  },
  submitButton:{
    width: '70%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: Colors.black3,
    marginBottom: 10,
  },
  buttonTitle:{
    fontSize: 17,
    color: Colors.white2,
  },
});
