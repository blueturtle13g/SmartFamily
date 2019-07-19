import React from 'react';
import {
    View,
    StyleSheet,
    Switch,
} from 'react-native';
import Border from 'SmartFamily/src/components/border';
import ModalHeader from '../modalHeader';
import IranSansText from 'SmartFamily/src/components/iranSansText';
import MedicalOption from '../medicalOption';

const medical_options = [
    'دیابت',
    'چربی خون',
    'فشار خون',
    'ناراحتی قلبی',
];

export default ({onUpdate, onHide})=>{
    return (
        <View style={styles.mainContainer}>
            <ModalHeader
                title={'مشخصات پزشکی'}
                onHide={onHide}
            />
            <Border/>

            <View style={styles.switchContainer}>
                <Switch
                    value={false}
                    style={styles.switch}
                    onValueChange={v=>onUpdate('title', v)}
                />
                <IranSansText
                    style={styles.switchText}
                >
                    باردار هستید
                </IranSansText>
            </View>

            <View style={styles.optionsContainer}>
                {medical_options.map(option=>(
                    <MedicalOption
                        key={option}
                        onPress={()=>{}}
                        title={option}
                    />
                ))}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer:{
        paddingHorizontal: 20,
        flex: 1,
    },
    switchContainer:{
        flexDirection: 'row',
        height: 60,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    optionsContainer:{
        flexDirection: 'row',
        flex: 1,
        flexWrap: 'wrap',
        justifyContent: 'center',
    }
})