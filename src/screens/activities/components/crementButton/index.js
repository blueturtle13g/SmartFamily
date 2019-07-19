import React from 'react';
import {
    TouchableOpacity,
    StyleSheet,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Colors from 'SmartFamily/src/constants/Colors';

export default ({onPress, sign, active})=>{
    return (
        <TouchableOpacity
            onPress={onPress}
            style={[
                styles.mainContainer,
                active && styles.active
            ]}
        >
            <FontAwesome
                name={sign}
                size={18}
                color={'#fff'}
            />
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    active:{
        backgroundColor: Colors.main,
    },
    mainContainer:{
        width: 25,
        height: 25,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ccc',
        borderRadius: 3,
        elevation: 2,
    },
});
