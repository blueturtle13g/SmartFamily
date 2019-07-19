import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Colors from 'SmartFamily/src/constants/Colors';

export default ({onPress})=>{
    return (
        <TouchableOpacity
            onPress={onPress}
            style={styles.mainContainer}
        >
            <EvilIcons
                name={'chart'}
                color={'#FFF'}
                size={28}
            />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    mainContainer:{
        position: 'absolute',
        bottom: 20,
        left: 14,
        width: 35,
        height: 35,
        borderRadius: 100,
        backgroundColor: Colors.statusbar,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 6,
    }
})