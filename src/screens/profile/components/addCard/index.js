import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Colors from 'SmartFamily/src/constants/Colors';

export default function index({onPress}) {
    return (
        <TouchableOpacity onPress={onPress} style={styles.mainContainer}>
            <AntDesign
                name={'pluscircle'}
                size={37}
                color={Colors.main}
            />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    mainContainer:{
        borderWidth: 1,
        borderStyle: 'dashed',
        borderRadius: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        width: '47%',
        height: 175,
        borderColor: Colors.main,
    },
})