import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import IranSansText from 'SmartFamily/src/components/iranSansText';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Colors from 'SmartFamily/src/constants/Colors';

export default ({onPress, description, checked})=>{
    return (
        <View style={styles.mainContainer}>
            <TouchableOpacity
                activeOpacity={1}
                onPress={onPress}
                style={[
                    styles.button,
                    checked && styles.activeButton
                ]}
            >
                <IranSansText
                    style={[
                        styles.text,
                        checked && styles.activeText
                    ]}
                    fontWeight="Light"
                >
                    {description}
                </IranSansText>
                {checked &&(
                    <FontAwesome
                        name={'check'}
                        size={20}
                        color={'#fff'}
                        style={styles.checkIcon}
                    />
                )}
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    mainContainer:{
        width: '33%',
        height: 90,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button:{
        width: '90%',
        height: '90%',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: 'rgba(0,0,0, .1)',
        borderColor: '#eee',
        borderRadius: 10,
        elevation: .5,
    },
    text:{
        fontSize: 13,
    },
    activeText:{
        color: '#fff', 
    },
    checkIcon:{
        position: 'absolute',
        top: 8,
        right: 8,
    },
    activeButton:{
        backgroundColor: Colors.appColor,
        borderWidth: 0,
        elevation: 3,
    },
})
