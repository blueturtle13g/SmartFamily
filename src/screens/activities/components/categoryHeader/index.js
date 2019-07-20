import React from 'react';
import { View, StyleSheet, Switch, TouchableOpacity } from 'react-native';
import IranSansText from 'SmartFamily/src/components/iranSansText';

export default ({
    layout,
    onlyDiscounts,
    onToggle,
})=>{
    return (
        <View style={styles.mainContainer}>
            <View style={styles.optionsContainer}>
                <View style={styles.layoutButtonsContainer}>
                    <TouchableOpacity
                        style={[
                            styles.layoutButton,
                            {borderRightWidth: .5},
                            layout==='grid' &&styles.activeLayout
                        ]}
                        onPress={()=>onToggle('layout')}
                    >

                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[
                            styles.layoutButton,
                            {borderLeftWidth: .5},
                            layout==='column' &&styles.activeLayout
                        ]}
                        onPress={()=>onToggle('layout')}
                    >

                    </TouchableOpacity>
                </View>
                <Switch
                    value={onlyDiscounts}
                    style={styles.switch}
                    onValueChange={()=>onToggle('onlyDiscounts')}
                />
            </View>
            <View style={styles.textContainer}>
                <IranSansText
                    fontWeight={"Light"}
                    style={styles.text}
                >
                    فقط تخفیف دارها
                </IranSansText>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer:{
        height: 60,
        flexDirection: 'row',
        alignItems: 'center',
        // backgroundColor: 'blue',
    },
    textContainer:{
        flex: 1,
    },
    text:{
        color: 'grey',
        fontSize: 12,
    },
    optionsContainer:{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    layoutButtonsContainer:{
        width: 76,
        height: 38,
        flexDirection: 'row',
        elevation: 5,
        backgroundColor: '#fff',
        borderWidth: .5,
        borderColor: '#aaa',
        borderRadius: 2,
    },
    layoutButton:{
        flex: 1,
        borderColor: '#aaa',
        justifyContent: 'center',
        alignItems: 'center',
    }
})