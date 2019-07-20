import { StyleSheet } from 'react-native';
import { DEVICE_HEIGHT } from 'SmartFamily/src/constants/Layout';
import Colors from 'SmartFamily/src/constants/Colors';

export default StyleSheet.create({
    backgroundCard:{
        height: 30,
        width: '87%',
        borderTopRightRadius: 17,
        borderTopLeftRadius: 17,
        backgroundColor: '#fff',
        alignSelf: 'center',
        elevation: 1,
    },
    modal:{
        margin: 0,
        justifyContent: 'flex-end',
    },
    mainContainer:{
        backgroundColor: '#fff',
        borderTopRightRadius: 16,
        borderTopLeftRadius: 16,
        elevation: 5,
    },
    submitButton:{
        height: 50,
        width: '100%',
        backgroundColor: Colors.main,
        justifyContent: 'center',
        alignItems: 'center',
    },
    submitText:{
        color: '#fff',
    }
})