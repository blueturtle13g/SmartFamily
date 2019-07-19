import React from 'react';
import {
    TouchableOpacity,
    StyleSheet,
    Image,
    View,
} from 'react-native';
import Colors from 'SmartFamily/src/constants/Colors';
import IranSansText from 'SmartFamily/src/components/iranSansText';

export default function index({
    onPress,
    member:{
        name,
        description,
        age,
        generation,
    }
}) {
    let source;
    switch(generation){
        case 'woman':
            source = require('SmartFamily/assets/images/woman.png')
            break;
        case 'man':
            source = require('SmartFamily/assets/images/man.png')
            break;
        case 'boy':
            source = require('SmartFamily/assets/images/boy.png')
            break;
        case 'girl':
            source = require('SmartFamily/assets/images/girl.png')
    }
    return (
        <View
            style={styles.mainContainer}
        >
            <View style={styles.imageContainer}>
                <Image
                    source={source}
                    style={styles.image}
                />
            </View>

            <View style={styles.infoContainer}>
                <IranSansText
                    style={styles.name}
                    fontWeight="Bold"
                >
                    {name}
                </IranSansText>
                <IranSansText
                    style={styles.description}                
                >
                    {description}
                </IranSansText>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer:{
        borderRadius: 3,
        backgroundColor: '#fff',
        width: '47%',
        height: 175,
        marginVertical: 8,
        borderColor: Colors.main,
        overflow: 'hidden',
        elevation: 2,
    },
    imageContainer:{
        height: '68%',
        width: '100%',
        backgroundColor: '#B2E7ED',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    image:{
        height: '80%',
        width: '80%',
        resizeMode: 'contain',

    },
    infoContainer:{
        height: '32%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'flex-end',
        paddingRight: 15,
    },
    name:{
        fontSize: 13,
        color: '#7F7F7F',
    },
    description:{
        fontSize: 10,
        color: '#CCCCCC',
    }
})