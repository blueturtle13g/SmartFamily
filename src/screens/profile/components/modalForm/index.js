import React from 'react';
import {
    View,
    StyleSheet,
} from 'react-native';
import InputWithLabel from 'SmartFamily/src/components/inputWithLabel';
import Border from 'SmartFamily/src/components/border';
import ModalHeader from '../modalHeader';

export default ({
    onUpdate,
    onHide,
    form:{
        name,
        age,
        phoneNumber,
        gender,
        height,
        weight,
    },
    form,
    activeInput,
})=>{

    _onFocus = (title, placeholder, labelText)=>{
        console.log('onFocus: ', {title, placeholder, labelText})
        onUpdate('activeInput', {title, placeholder, labelText})
    }

    _renderInput = (title, placeholder, labelText)=>{
        if(activeInput !== null && title !== activeInput.title){
            return;
        }
        return(
            <View style={styles.inputContainer}>
                <InputWithLabel
                    value={form[title]}
                    onUpdate={v=>{
                        console.log('form[title]: ', form[title])
                        console.log('title: ', title)
                        console.log('v: ', v)
                        onUpdate(title, v)
                    }}
                    onFocus={()=>_onFocus(title, placeholder, labelText)}
                    onBlur={()=>onUpdate('activeInput', null)}
                    placeholder={placeholder}
                    dropDown={title==='gender'}
                    labelText={labelText}
                />
            </View>
        )
    }

    return (
        <View style={styles.formContainer}>
            <ModalHeader title={'افزودن مشخصات فردی'} onHide={onHide}/>
            <Border/>
            {_renderInput('name', "خودم", "نام")}
            {_renderInput('phoneNumber', 'شماره تماس خود را وارد کنید', "شماره موبایل")}
            {_renderInput('gender', 'یک مورد را انتخاب کنید', "جنسیت")}
            {_renderInput('age', 'سن را وارد کنید', "سن")}
            {_renderInput('height', 'قد را وارد کنید', 'قد (سانتی متر)')}
            {_renderInput('weight', 'وزن را وارد کنید', 'وزن (کیلوگرم)')}
        </View>
    )
}

const styles = StyleSheet.create({
    formContainer:{
        paddingHorizontal: 20,
    },
    inputContainer:{
        borderWidth: .5,
        borderColor: '#1A98A7',
        height: 39,
        marginVertical: 5,
        borderRadius: 2,
    },
})