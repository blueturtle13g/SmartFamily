import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import IranSansText from 'SmartFamily/src/components/iranSansText';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default ({title, onPress, isBack})=>{
    return (
        <TouchableOpacity
            style={styles.mainContainer}
            onPress={onPress}
        >
            <IranSansText
                fontWeight={'Light'}
                style={styles.headerRightText}
            >
                {title}
            </IranSansText>
            {isBack ?
            (
                <Ionicons
                    name="ios-arrow-forward"
                    size={25}
                    color={'#fff'}
                />
            )
            :
            (
                <FontAwesome
                    name={'bars'}
                    size={20}
                    color={'#fff'}
                />
            )
            }
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        width: 110,
        marginRight: 20,
    },
    headerRightText: {
        fontSize: 13,
        color: '#fff',
    },
});