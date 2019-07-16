import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles.js';

export default ({
    member:{name},
    onModifyPress
})=>{
    return (
        <View style={styles.mainContainer}>
            <View style={styles.profileContainer}>
                <Text style={styles.name}>{name}</Text>
            </View>
            <TouchableOpacity onPress={onModifyPress} style={styles.modifyButton}>
                <Text style={styles.buttonTitle}>Modify</Text>
            </TouchableOpacity>
        </View>
    )
};
