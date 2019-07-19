import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    mainContainer:{
        flex: 1,
        backgroundColor: '#F7FEFF',
    },
    membersContainer:{
        paddingTop: 10,
        width: '85%',
        alignSelf: 'center',
        // backgroundColor: 'pink',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignItems: 'center',
    }
})