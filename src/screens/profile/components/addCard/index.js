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
                color={Colors.appColor}
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
        width: 145,
        height: 175,
        borderColor: Colors.appColor,
    },
})