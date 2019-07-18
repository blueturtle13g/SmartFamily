import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import IranSansText from 'SmartFamily/src/components/iranSansText';

export default (props)=>{
    return (
        <View style={styles.mainContainer}>
            <View style={styles.iconsContainer}>
            <TouchableOpacity
                style={styles.iconContainer}
            >
                <FontAwesome5
                    name={'chart-bar'}
                    size={30}
                />
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.iconContainer}
            >
                <MaterialCommunityIcons
                name={'view-dashboard'}
                size={32}
                />
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.iconContainer}
            >
                <FontAwesome5
                name={'users'}
                size={28}
                />
            </TouchableOpacity>

            </View>

            <View style={styles.routeNamesContainer}>
                <View style={styles.routeNameContainer}>
                    <IranSansText fontWeight={'UltraLight'} style={styles.routeNameText}>گزارشات</IranSansText>
                </View>
                <View style={styles.routeNameContainer}>
                    <IranSansText fontWeight={'UltraLight'} style={styles.routeNameText}>فعالیت های من</IranSansText>
                </View>
                <View style={styles.routeNameContainer}>
                    <IranSansText fontWeight={'UltraLight'} style={styles.routeNameText}>خانواده من</IranSansText>
                </View>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        height: 100,
    },
    iconsContainer:{
        height: '45%',
        width: '100%',
        backgroundColor: '#eee',
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: '#eee',
    },
    iconContainer:{
        width: '25%',
        height: '100%',
        backgroundColor: '#27A6B5',
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },
    routeNamesContainer:{
        height: '55%',
        width: '100%',
        flexDirection: 'row',
    },
    routeNameContainer:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    routeNameText:{
        fontSize: 11,
    }
})