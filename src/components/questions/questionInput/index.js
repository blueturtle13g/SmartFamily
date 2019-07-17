import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

export default ({
    value,
    placeholder,
    onChangeText,
    keyboardType,
})=>{
    return (
        <TextInput
            value={value}
            placeholder={placeholder}
            onChangeText={onChangeText}
            keyboardType={keyboardType}
            style={styles.input}
        />
    )
};

const styles = StyleSheet.create({
    input:{
        width: '85%',
        height: 38,
        backgroundColor: '#fff',
        textAlign: 'center',
    },
})
