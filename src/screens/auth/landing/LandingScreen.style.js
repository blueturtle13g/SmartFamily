import { StyleSheet } from 'react-native';
import Colors from '@constants/Colors';
import Layout from '@constants/Layout';

export default StyleSheet.create({
  facebookButtonContainer: {
    alignItems: 'center',
    marginTop: 10,
  },
  gradientButtonContainer: {
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 25,
  },
  imagesContainer: {
    alignItems: 'center',
    marginTop: 15,
  },
  mainContainer: {
    backgroundColor: Colors.white1,
    flex: 1,
  },
  menuContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    marginBottom: -Layout.window.height,
  },
  stickFigureImage: {
    height: 260,
    resizeMode: 'contain',
    width: '100%',
  },
  skip: {
    color: Colors.black1,
    position: 'absolute',
    right: 20,
    top: 60,
  },
  video: {
    flex: 1,
  },
});
