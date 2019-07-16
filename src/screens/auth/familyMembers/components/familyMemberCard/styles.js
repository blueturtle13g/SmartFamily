import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    mainContainer:{
        height: 120,
        width: 100,
        borderWidth: .5,
        borderRadius: 10,
        overflow: 'hidden',
        margin: 5,
    },
    profileContainer:{
        height: 90,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    name:{
        fontSize: 18,
    },
    modifyButton:{
        width: '100%',
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'pink',
    },
    buttonTitle:{
        fontSize: 17,
    }
});