import React from 'react'
import {
    View,
    TouchableOpacity,
    StyleSheet,
} from 'react-native';
import {
    PROFILE_STACK,
    ACTIVITIES_STACK,
    REPORTS_STACK,
} from 'SmartFamily/src/store/redux/types';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Colors from 'SmartFamily/src/constants/Colors';

export default ({navigate, activeStack})=>{
    return (
        <View style={styles.iconsContainer}>
                
            <TouchableOpacity
                style={[
                    styles.iconContainer,
                    activeStack===REPORTS_STACK && styles.activeIcon
                ]}
                onPress={()=>navigate(REPORTS_STACK)}
            >
                <FontAwesome5
                    name={'chart-bar'}
                    size={30}
                    color={activeStack===REPORTS_STACK ? '#fff' : '#000'}
                />
            </TouchableOpacity>

            <TouchableOpacity
                style={[
                    styles.iconContainer,
                    activeStack===ACTIVITIES_STACK && styles.activeIcon
                ]}
                onPress={()=>navigate(ACTIVITIES_STACK)}
            >
                <MaterialCommunityIcons
                    name={'view-dashboard'}
                    size={32}
                    color={activeStack===ACTIVITIES_STACK ? '#fff' : '#000'}
                />
            </TouchableOpacity>

            <TouchableOpacity
                style={[
                    styles.iconContainer,
                    activeStack===PROFILE_STACK && styles.activeIcon
                ]}
                onPress={()=>navigate(PROFILE_STACK)}
            >
                <FontAwesome5
                    name={'users'}
                    size={28}
                    color={activeStack===PROFILE_STACK ? '#fff' : '#000'}
                />
            </TouchableOpacity>

        </View>
    )
}

const styles = StyleSheet.create({
    activeIcon:{
        backgroundColor: Colors.appColor,
        elevation: 9,
    },
    iconsContainer:{
        height: '46%',
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: '#eee',
    },
    iconContainer:{
        width: '23%',
        height: '100%',
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
})