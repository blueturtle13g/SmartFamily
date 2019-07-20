import { StyleSheet } from 'react-native';
import { DEVICE_WIDTH, DEVICE_HEIGHT } from 'SmartFamily/src/constants/Layout';

export default StyleSheet.create({
    mainContainer:{
        flex: 1,
        backgroundColor: '#F7FEFF',
    },
    fakeImage:{
        height: DEVICE_HEIGHT,
        width: DEVICE_WIDTH,
        resizeMode: 'contain',
    }
})