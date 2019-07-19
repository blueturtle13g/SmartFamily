import React from 'react';
import { View, StyleSheet } from 'react-native';
import IranSansText from 'SmartFamily/src/components/iranSansText';
import CrementButton from 'SmartFamily/src/components/crementButton';

export default ({title, plusActive, minusActive})=>{
    return (
        <View style={styles.mianContainer}>
            <CrementButton
                active={minusActive}
                sign='minus'
            />
            <IranSansText
                style={styles.text}
            >
                {title}
            </IranSansText>
            <CrementButton
                active={plusActive}
                sign='plus'
            />
        </View>
    )
};

const styles = StyleSheet.create({
    mianContainer:{
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'center',
        marginVertical: 15,
    },
    text:{
        marginHorizontal: 16,
    },
})
