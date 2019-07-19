import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import IranSansText from 'SmartFamily/src/components/iranSansText';

export default ({onPress, title})=>{
    return (
        <View style={styles.mainContainer}>
            <TouchableOpacity onPress={onPress} style={styles.button}>
                <IranSansText
                    style={styles.text}
                    fontWeight="Bold"
                >
                    {title}
                </IranSansText>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    mainContainer:{
        width: '33%',
        height: 80,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button:{
        width: '90%',
        height: '90%',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 10,
    },
    text:{
        fontSize: 15,
    }
})
