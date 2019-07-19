import React from 'react';
import {
    View,
    StyleSheet,
    Switch,
} from 'react-native';
import Border from 'SmartFamily/src/components/border';
import ModalHeader from '../modalHeader';
import IranSansText from 'SmartFamily/src/components/iranSansText';
import MedicalCase from '../medicalCase';

const CASE_OPTIONS = [
    {
        title: 'diabet',
        description: 'دیابت'
    },
    {
        title: 'fatLipid',
        description: 'چربی خون'
    },
    {
        title: 'bloodPressure',
        description: 'فشار خون'
    },
    {
        title: 'heartDisease',
        description: 'ناراحتی قلبی'
    }
];

export default ({onUpdateCase, onHide, cases})=>{
    return (
        <View style={styles.mainContainer}>
            <ModalHeader
                title={'مشخصات پزشکی'}
                onHide={onHide}
            />
            <Border/>

            <View style={styles.switchContainer}>
                <Switch
                    value={cases.includes('pregnancy')}
                    style={styles.switch}
                    onValueChange={v=>onUpdateCase('pregnancy')}
                />
                <IranSansText
                    style={styles.switchText}
                    fontWeight="UltraLight"
                >
                    باردار هستید
                </IranSansText>
            </View>

            <View style={styles.casesContainer}>
                {CASE_OPTIONS.map(cas=>(
                    <MedicalCase
                        checked={cases.includes(cas.title)}
                        key={cas.title}
                        onPress={()=>onUpdateCase(cas.title)}
                        description={cas.description}
                    />
                ))}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer:{
        paddingHorizontal: 20,
    },
    switchContainer:{
        flexDirection: 'row',
        height: 60,
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: 10,
        paddingRight: 15,
    },
    casesContainer:{
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        marginBottom: 10,
    },
    switch:{
        color: 'green',
    },
    switchText:{
        color: 'grey',
    }
})