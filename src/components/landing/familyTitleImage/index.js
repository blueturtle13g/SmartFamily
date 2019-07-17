import React from 'react';
import {
    View,
    Image,
    Text,
} from 'react-native';
import styles from './styles';

export default ()=>{
    return (
        <View style={styles.mainContainer}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>Smart Family</Text>
            </View>
            <Image
                style={styles.familyImage}
                source={require('SmartFamily/assets/family.png')}
            />
        </View>
    )
}
