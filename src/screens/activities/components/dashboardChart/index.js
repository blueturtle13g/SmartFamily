import React from 'react';
import { View, StyleSheet } from 'react-native';
import IranSansText from 'SmartFamily/src/components/iranSansText';
import Colors from 'SmartFamily/src/constants/Colors';

export default ()=>{
    return (
        <View style={styles.chartContainer}>
            <IranSansText
                style={styles.chartText}
                fontWeight={'Light'}
            >
                پیشنهاد ما برای مصرف شما در طول یک هفته
            </IranSansText>
        </View>
    )
}

const styles = StyleSheet.create({
    chartContainer:{
        width: '85%',
        alignSelf: 'center',
        backgroundColor: '#fff',
        // height: 250,
        marginTop: 15,
        borderRadius: 6,
        elevation: 5,
    },
    chartText:{
        fontSize: 11,
        marginTop: 25,
        right: 17,
        color: Colors.statusbar,
    }
})
