import React from 'react';
import {
    TouchableOpacity,
    Text,
    StyleSheet,
} from 'react-native';

export default ({onPress})=>{
    return (
        <TouchableOpacity onPress={onPress} style={styles.button}>
            <Text style={styles.buttonTitle}>شروع کن</Text>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    button:{
        width: '80%',
        height: 40,
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
