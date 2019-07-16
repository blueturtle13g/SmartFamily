import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    mainContainer: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    barContainer: {
      position: 'absolute',
      zIndex: 2,
      bottom: 90,
      flexDirection: 'row',
    },
    track: {
      backgroundColor: '#ccc',
      overflow: 'hidden',
      height: 7,
      borderRadius: 50,
    },
    bar: {
      backgroundColor: '#5294d6',
      height: 7,
      borderRadius: 50,
      position: 'absolute',
      left: 0,
      top: 0,
    },

});