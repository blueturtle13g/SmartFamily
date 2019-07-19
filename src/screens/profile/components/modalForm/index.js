import React from 'react';
import {
    View,
    StyleSheet,
} from 'react-native';
import InputWithLabel from 'SmartFamily/src/components/landing/inputWithLabel';
import Border from 'SmartFamily/src/components/border';
import ModalHeader from '../modalHeader';

export default ({onUpdate, onHide})=>{
    return (
        <View style={styles.formContainer}>
            <ModalHeader title={'افزودن مشخصات فردی'} onHide={onHide}/>
            <Border/>

            <View style={styles.inputContainer}>
                <InputWithLabel
                    value={'رضا شجاع'}
                    // onChangeText={phoneNumber=>this.setState({phoneNumber})}
                    placeholder={''}
                    labelText="نام"
                />
            </View>
            <View style={styles.inputContainer}>
                <InputWithLabel
                    value={'09027575765'}
                    // onChangeText={phoneNumber=>this.setState({phoneNumber})}
                    placeholder={'09027575765'}
                    keyboardType="phone-pad"
                    labelText="شماره موبایل"
                />
            </View>
            <View style={styles.inputContainer}>
                <InputWithLabel
                    value={'زن'}
                    // onChangeText={phoneNumber=>this.setState({phoneNumber})}
                    placeholder={'یک مورد را انتخاب کنید'}
                    dropDown
                    labelText="جنسیت"
                />
            </View>
            <View style={styles.inputContainer}>
                <InputWithLabel
                    value={'۵۶'}
                    // onChangeText={phoneNumber=>this.setState({phoneNumber})}
                    placeholder={'سن را وارد کنید'}
                    labelText="سن"
                />
            </View>
            <View style={styles.inputContainer}>
                <InputWithLabel
                    value={'۵۶'}
                    // onChangeText={phoneNumber=>this.setState({phoneNumber})}
                    placeholder={'قد را وارد کنید'}
                    labelText="قد (سانتی متر)"
                />
            </View>
            <View style={styles.inputContainer}>
                <InputWithLabel
                    value={'۴۰'}
                    // onChangeText={phoneNumber=>this.setState({phoneNumber})}
                    placeholder={'وزن را وارد کنید'}
                    labelText="وزن (کیلوگرم)"
                />
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    formContainer:{
        paddingHorizontal: 20,
        flex: 1,
    },
    inputContainer:{
        borderWidth: .5,
        borderColor: '#1A98A7',
        height: 39,
        marginVertical: 5,
        borderRadius: 2,
    },
})