import React from 'react';
import { View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default ({options, value})=>{
    return (
        <View style={styles.mainContainer}>
            {options.map(option=>{
                return(
                    <TouchableOpacity
                        key={option}
                        style={styles.optionContainer}
                    >
                        <MaterialCommunityIcons
                            style={styles.radioButton}
                            name={
                                value===option ?
                                'checkbox-blank-circle':
                                'checkbox-blank-circle-outline'
                            }
                            size={25}
                        />
                        <Text style={styles.optionTitle}>{option}</Text>
                    </TouchableOpacity>
                )
            })}
        </View>
    )
}
