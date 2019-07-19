import React from 'react';
import {
    TouchableOpacity,
    StyleSheet,
} from 'react-native';
import IranSansText from 'SmartFamily/src/components/iranSansText';

export default ({onPress, title})=>{
    return (
        <TouchableOpacity onPress={onPress} style={styles.button}>
            <IranSansText fontWeight="Medium" style={styles.buttonTitle}>{title}</IranSansText>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    button:{
        width: '85%',
        height: 36,
        borderRadius: 6,
        backgroundColor: '#A3DBE1',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
    },
    buttonTitle:{
      color: '#fff',
    }
})
