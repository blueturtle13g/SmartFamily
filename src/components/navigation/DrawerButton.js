import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import IranSansText from 'SmartFamily/src/components/iranSansText';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default ({title, onPress})=>{
    return (
        <TouchableOpacity
            style={styles.headerRight}
            onPress={onPress}
        >
            <IranSansText
                fontWeight={'Light'}
                style={styles.headerRightText}
            >
                {title}
            </IranSansText>
            <FontAwesome
                name={'bars'}
                size={20}
                color={'#fff'}
            />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    headerRight: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        width: 100,
        marginRight: 20,
    },
    headerRightText: {
        fontSize: 13,
        color: '#fff',
    },
});