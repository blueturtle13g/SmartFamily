import { StyleSheet } from 'react-native';
import colors from '@constants/Colors';

export default StyleSheet.create({
  modalContent: {
    alignItems: 'center',
    backgroundColor: 'white',
    borderColor: 'rgba(0, 0, 0, 0.1)',
    borderRadius: 4,
    justifyContent: 'center',
    marginLeft: 50,
    marginRight: 50,
    padding: 30,
  },
  title: {
    color: colors.greyDark4,
    fontSize: 22,
    textAlign: 'center',
  },
  text: {
    color: colors.grey3,
    fontSize: 13,
    lineHeight: 15,
    textAlign: 'center',
  },
  textContainer: {
    marginBottom: 25,
    marginTop: 10,
  },
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 5,
  },
});
