import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import IranSansText from 'SmartFamily/src/components/iranSansText';

export default ({onPress})=>{
    return (
        <View style={styles.mainContainer}>
            <TouchableOpacity onPress={onPress} style={styles.card}>
                <AntDesign
                    name={'pluscircle'}
                    size={37}
                    color={'#27A6B5'}
                />
            </TouchableOpacity>
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
    card:{
        borderWidth: 1,
        borderStyle: 'dashed',
        borderRadius: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        width: 145,
        height: 175,
        borderColor: '#27A6B5'
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