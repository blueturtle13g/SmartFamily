import React from 'react';
import {
    View,
    Image,
    TouchableOpacity,
} from 'react-native';
import styles from './styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import IranSansText from 'SmartFamily/src/components/iranSansText';

export default ({keyboardOpen, onBackPress, image})=>{
    let source = require('SmartFamily/assets/images/family.png');
    switch(image){
        case 'restaurant':
            source = require('SmartFamily/assets/images/restaurant.png');
        case 'picnic':
            source = require('SmartFamily/assets/images/picnic.png');
        case 'regime':
            source = require('SmartFamily/assets/images/regime.png');
    }
    return (
        <View style={styles.mainContainer}>
            {!keyboardOpen &&(
                <View style={styles.titleContainer}>
                    <View style={styles.headerBlock}/>
                    <View style={styles.headerBlock}>
                        <IranSansText style={styles.title}>Smart Family</IranSansText>
                    </View>
                    {onBackPress ?
                        (
                            <View
                                style={styles.headerBlock}
                            >
                                <TouchableOpacity
                                    onPress={onBackPress}
                                    style={styles.backIconContainer}
                                >
                                    <Ionicons
                                        name={'ios-arrow-forward'}
                                        size={24}
                                        color={'#fff'}
                                    />
                                </TouchableOpacity>
                            </View>
                        )
                        :
                        (
                            <View style={styles.headerBlock}/>
                        )
                    }
                </View>
            )}
            <Image
                style={styles.familyImage}
                source={source}
            />
        </View>
    )
}
