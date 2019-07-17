import React from 'react';
import {
    View,
    Image,
    TouchableOpacity,
    StyleSheet,
    Text
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default ({
    regimes,
    onUpdate,
})=>{
    return (
        <View style={styles.mainContainer}>
            <TouchableOpacity
                style={styles.checkboxContainer}
                onPress={()=>onUpdate(0)}
                activeOpacity={.8}
            >
                <Image
                    source={require('SmartFamily/assets/mobileIcon.png')}
                    style={styles.checkBoxImage}
                />
                <View style={styles.textCheckIcon}>
                    <Text style={styles.text}>همه غذاها</Text>
                    <MaterialCommunityIcons
                        name={'check-box-outline'}
                        color={regimes.includes(0) ? 'green' : '#eee'}
                        size={20} 
                    />
                </View>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.checkboxContainer}
                onPress={()=>onUpdate(1)}
                activeOpacity={.8}
            >
                <Image
                    source={require('SmartFamily/assets/mobileIcon.png')}
                    style={styles.checkBoxImage}
                />
                <View style={styles.textCheckIcon}>
                    <Text style={styles.text}>رژیم لاغری</Text>
                    <MaterialCommunityIcons
                        name={'check-box-outline'}
                        color={regimes.includes(1) ? 'green' : '#eee'}
                        size={20} 
                    />
                </View>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.checkboxContainer}
                onPress={()=>onUpdate(2)}
                activeOpacity={.8}
            >
                <Image
                    source={require('SmartFamily/assets/mobileIcon.png')}
                    style={styles.checkBoxImage}
                />
                <View style={styles.textCheckIcon}>
                    <Text style={styles.text}>سبزی خواری</Text>
                    <MaterialCommunityIcons
                        name={'check-box-outline'}
                        color={regimes.includes(2) ? 'green' : '#eee'}
                        size={20} 
                    />
                </View>
            </TouchableOpacity>
        </View>
    )
};

const styles = StyleSheet.create({
    mainContainer:{
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    checkBoxImage:{
        height: '75%',
        width: '100%',
        resizeMode: 'contain',
    },
    text:{
        fontSize: 12,
        marginRight: 3,
    },
    checkboxContainer:{
        height: 80,
        width: 90,
    },
    textCheckIcon:{
        marginTop: 3,
        flexDirection: 'row',
        justifyContent: 'center',
        height: '25%',
        width: '100%',
        alignItems: 'center',
    }
})
