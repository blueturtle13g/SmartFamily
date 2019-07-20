import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
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
            <Image
                style={styles.image}
                source={require('SmartFamily/assets/images/chart.png')}
            />
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
    },
    image:{
        marginTop: 10,
        marginBottom: 2,
        width: '100%',
        height: 200,
        resizeMode: 'contain',
    }
})
