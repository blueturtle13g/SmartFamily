import { StyleSheet } from 'react-native';
import { DEVICE_HEIGHT } from 'SmartFamily/src/constants/Layout';
import Colors from 'SmartFamily/src/constants/Colors';

export default StyleSheet.create({
    modal:{
        margin: 0,
        justifyContent: 'flex-end',
    },
    mainContainer:{
        backgroundColor: '#fff',
        borderTopRightRadius: 16,
        borderTopLeftRadius: 16,
        elevation: 5,
        paddingHorizontal: 15,
    },
    image:{
        width: '100%',
        height: 250,
        resizeMode: 'contain',
        marginVertical: 2,
    }
})