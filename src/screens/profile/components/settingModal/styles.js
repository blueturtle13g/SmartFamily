import { StyleSheet } from 'react-native';
import { DEVICE_HEIGHT } from 'SmartFamily/src/constants/Layout';

export default StyleSheet.create({
    modal:{
        margin: 0,
        justifyContent: 'flex-end',
    },
    mainContainer:{
        backgroundColor: '#fff',
        height: DEVICE_HEIGHT*.7,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
    },
    submitButton:{
        height: 50,
        width: '100%',
        backgroundColor: '#27A6B5',
        justifyContent: 'center',
        alignItems: 'center',
    },
    submitText:{
        color: '#fff',
    }
})