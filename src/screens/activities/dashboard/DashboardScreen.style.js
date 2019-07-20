import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    mainContainer:{
        backgroundColor: '#F7FEFF',
    },
    categoriesContainer:{
        paddingTop: 10,
        width: '85%',
        alignSelf: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    headerImage:{
        width: 25,
        height: 25,
        resizeMode: 'contain',
    },
})