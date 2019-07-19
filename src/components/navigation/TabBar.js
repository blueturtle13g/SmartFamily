import React from 'react';
import { StyleSheet, View } from 'react-native';
import IranSansText from 'SmartFamily/src/components/iranSansText';
import { connect } from 'react-redux';
import TabIcons from './TabIcons';
import {
    REPORTS_STACK,
    PROFILE_STACK,
    ACTIVITIES_STACK,
} from 'SmartFamily/src/store/redux/types';

const TabBar = ({navigation:{navigate}, activeStack})=>{
    return (
        <View style={styles.mainContainer}>
            <TabIcons navigate={navigate} activeStack={activeStack}/>
            <View style={styles.routeNamesContainer}>
                <View style={styles.routeNameContainer}>
                    {activeStack===REPORTS_STACK &&(
                        <IranSansText
                            fontWeight={'Bold'}
                            style={styles.routeNameText}
                        >
                            گزارشات
                        </IranSansText>
                    )}
                </View>
                <View style={styles.routeNameContainer}>
                    {activeStack===ACTIVITIES_STACK &&(
                        <IranSansText
                            fontWeight={'Bold'}
                            style={styles.routeNameText}
                        >
                            فعالیت های من
                        </IranSansText>
                    )}
                </View>
                <View style={styles.routeNameContainer}>
                    {activeStack===PROFILE_STACK &&(
                        <IranSansText
                            fontWeight={'Bold'}
                            style={styles.routeNameText}
                        >
                            خانواده من
                        </IranSansText>
                    )}
                </View>
            </View>

        </View>
    )
};

const mapStateToProps = ({activeStack})=>{
    return{activeStack}
}

export default connect(mapStateToProps)(TabBar)

const styles = StyleSheet.create({
    mainContainer: {
        height: 90,
    },
    routeNamesContainer:{
        height: '54%',
        width: '100%',
        flexDirection: 'row',
        backgroundColor: '#F7FEFF',
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