import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import IranSansText from 'SmartFamily/src/components/iranSansText';
import Colors from 'SmartFamily/src/constants/Colors';
import AddCard from '../addCard';

export default ({onPress})=>{
    return (
        <View style={styles.mainContainer}>
            <AddCard onPress={onPress}/>
            <IranSansText style={styles.mainText}>
                شما هنوز مشخصات هیچ شخصی را وارد نکرده اید
            </IranSansText>
            <IranSansText fontWeight="Light" style={styles.text}>
                برای استفاده از امکانات مشخصات اعضای خانواده خود را اضافه کنید
            </IranSansText>
        </View>
    )
};

const styles = StyleSheet.create({
    mainContainer:{
        width: '100%',
        alignItems: 'center',
        marginTop: 20,
    },
    mainText:{
        marginTop: 15,
        marginBottom: 7,
        color: '#aaa',
    },
    text:{
        fontSize: 12,
        color: '#aaa',
    }
})