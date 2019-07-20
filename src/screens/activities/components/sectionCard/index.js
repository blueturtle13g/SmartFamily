import React from 'react';
import {
    TouchableOpacity,
    StyleSheet,
    Image,
    View,
} from 'react-native';
import Colors from 'SmartFamily/src/constants/Colors';
import IranSansText from 'SmartFamily/src/components/iranSansText';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default function index({
    onPress,
    name,
    title,
}) {
    let source;
    switch(name){
        case 'waletBoard':
            source = require('SmartFamily/assets/images/waletBoard.png')
            break;
        case 'waletCar':
            source = require('SmartFamily/assets/images/waletCar.png')
            break;
        case 'waletMoney':
            source = require('SmartFamily/assets/images/waletMoney.png')
            break;
        case 'waletVeg':
            source = require('SmartFamily/assets/images/waletVeg.png');
    }
    return (
        <TouchableOpacity
            activeOpacity={.9}
            onPress={onPress}
            style={styles.mainContainer}
        >
            <View style={styles.imageContainer}>
                <Image
                    source={source}
                    style={styles.image}
                />
            </View>

            <View style={styles.infoContainer}>
                <IranSansText
                    style={styles.title}
                    fontWeight="Bold"
                >
                    {title}
                </IranSansText>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    mainContainer:{
        borderRadius: 3,
        backgroundColor: '#fff',
        width: '47%',
        height: 175,
        marginVertical: 8,
        borderColor: Colors.main,
        overflow: 'hidden',
        elevation: 2,
    },
    imageContainer:{
        height: '68%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    image:{
        marginTop: 10,
        height: '65%',
        width: '65%',
        resizeMode: 'contain',

    },
    infoContainer:{
        height: '32%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title:{
        fontSize: 13,
        color: '#7F7F7F',
    },
})