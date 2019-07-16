import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { TouchableOpacity } from 'react-native';
import styles from './styles';

export default ({onPress})=>{
    return (
        <TouchableOpacity
        style={styles.mainContainer}
        onPress={onPress}
    >
        <AntDesign
            name={'plus'}
            size={40}
        />
    </TouchableOpacity>
    )
}
