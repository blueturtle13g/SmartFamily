import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';

export default ({onPress, children})=>{
    return (
        <TouchableOpacity
            style={styles.mainContainer}
            onPress={onPress}
        >
            {children}
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        marginLeft: 33,
    },
});