import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from './CheckBox.style';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default ({title, checked, onPress}) =>(
    <TouchableOpacity activeOpacity={.9} onPress={()=>onPress(!checked)} style={styles.mainContainer}>
        <MaterialCommunityIcons
            name={checked ? 'checkbox-marked' : 'checkbox-blank-outline'}
            size={30}
        />
        <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
);
