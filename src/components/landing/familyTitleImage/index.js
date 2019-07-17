import React from 'react';
import {
    View,
    Image,
    Text,
} from 'react-native';
import styles from './styles';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default ({keyboardOpen, onBackPress})=>{
    return (
        <View style={styles.mainContainer}>
            <View style={styles.titleContainer}>
                {!keyboardOpen &&<Text style={styles.title}>Smart Family</Text>}
                {(!keyboardOpen && onBackPress) &&(
                    <Ionicons
                        name={'ios-arrow-forward'}
                        size={24}
                        color={'#fff'}
                        onPress={onBackPress}
                        style={styles.backIcon}
                    />
                )}
            </View>
            <Image
                style={styles.familyImage}
                source={require('SmartFamily/assets/family.png')}
            />
        </View>
    )
}
