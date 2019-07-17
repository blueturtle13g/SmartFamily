import React from 'react';
import {
    TouchableOpacity,
    Text,
    StyleSheet,
} from 'react-native';

export default ({onPress, title})=>{
    return (
        <TouchableOpacity onPress={onPress} style={styles.button}>
            <Text style={styles.buttonTitle}>{title}</Text>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    button:{
        width: '85%',
        height: 36,
        backgroundColor: '#A3DBE1',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
    },
    buttonTitle:{
      color: '#fff',
      fontWeight: 'bold',
    }
})
