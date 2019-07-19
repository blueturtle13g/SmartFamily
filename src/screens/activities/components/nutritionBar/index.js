import React from 'react';
import {
    TouchableOpacity,
    View,
    StyleSheet,
} from 'react-native';
import IranSansText from 'SmartFamily/src/components/iranSansText';

export default ({title, description, progressColor = 'blue'})=>{
    return (
        <View style={styles.mainContainer}>
            <View style={styles.infoContainer}>
                <IranSansText
                    fontWeight={'Light'}
                    style={styles.text}
                >
                    {description}
                </IranSansText>
                <IranSansText
                    fontWeight={'Light'}
                    style={styles.text}

                >
                    {title}
                </IranSansText>
            </View>
            <View style={styles.progressbar}>
                <View
                    style={[
                        styles.progressedView,
                        {backgroundColor: progressColor}
                    ]}
                />
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    mainContainer:{
        justifyContent: 'space-between',
        marginVertical: 15,
        width: '90%',
        height: 30,
        alignSelf: 'center',
        // backgroundColor: 'pink',
    },
    infoContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',

    },
    text:{
        fontSize: 11,
        color: 'blue',
    },

    progressbar:{
        height: 3,
        borderRadius: 15,
        backgroundColor: '#ccc',
        alignItems: 'flex-end'
    },
    progressedView:{
        width: '30%',
        height: 7,
        borderRadius: 15,
        position: 'absolute',
        top: -2,
    },
});
