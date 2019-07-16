import { StyleSheet } from 'react-native';
import { DEVICE_WIDTH, DEVICE_HEIGHT } from '../../../../../constants/Layout';

export default StyleSheet.create({
    mainContainer:{
        width: DEVICE_WIDTH,
        height: DEVICE_HEIGHT,
    },
    topContainer:{
        flex: 3,
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    title:{
        fontSize: 22,
        textAlign: 'center',
    },
    image:{
        height: DEVICE_WIDTH/2,
        width: DEVICE_WIDTH/2,
        backgroundColor: 'grey',
        borderRadius: DEVICE_WIDTH,
    },
    bottomContainer:{
        flex: 2,
        alignItems: 'center',
    },
    question:{
        fontSize: 16,
        marginVertical: 10,
    },
    input:{
        width: '80%',
        borderWidth: .5,
    },
    button:{
        justifyContent: 'center',
        alignItems: 'center',
        width: '80%',
        height: 50,
        backgroundColor: '#2b2b2b',
        position: 'absolute',
        bottom: 50,
    },
    buttonTitle:{
        color: 'white',
        fontSize: 17,
    }
})