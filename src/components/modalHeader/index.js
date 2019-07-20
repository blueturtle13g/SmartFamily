import React from 'react';
import { View, StyleSheet } from 'react-native';
import IranSansText from 'SmartFamily/src/components/iranSansText';
import AntDesign from 'react-native-vector-icons/AntDesign';

export default ({onHide, title})=>{
    return (
        <View style={styles.mainContainer}>
            <AntDesign
                onPress={onHide}
                name="close"
                size={25}
            />
            <IranSansText
                style={styles.text}
                fontWeight="Light"
            >
                {title}
            </IranSansText>
        </View>
    );
}

const styles = StyleSheet.create({
    mainContainer:{
        marginTop: 15,
        marginBottom: 8,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    text:{
        fontSize: 13,
    }
})
