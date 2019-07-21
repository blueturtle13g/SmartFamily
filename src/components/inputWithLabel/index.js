import React from 'react';
import {
    View,
    TextInput,
    Image,
    StyleSheet,
    Picker,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import IranSansText from 'SmartFamily/src/components/iranSansText';

export default ({
    keyboardType,
    value,
    onUpdate,
    placeholder,
    labelText,
    secureTextEntry,
    inputDescription,
    dropDown,
    onFocus,
    onBlur,
})=>{
    const renderIcon = ()=>{
        switch(labelText){
            case 'نام':
                return(
                    <FontAwesome
                        size={22}
                        style={styles.labelIcon}    
                        name={'id-badge'}
                    />
                );
            case 'شماره موبایل':
                return(
                    <FontAwesome
                        size={30}
                        style={styles.labelIcon}    
                        name={'mobile-phone'}
                    />
                );
            case 'کاربر تهران من':
                return(
                    <FontAwesome
                        size={25}
                        style={styles.labelIcon}    
                        name={'user'}
                    />
                );
            case 'جنسیت':
                return(
                    <FontAwesome5
                        size={25}
                        style={styles.labelIcon}    
                        name={'transgender'}
                    />
                );
            case 'سن':
                return(
                    <MaterialIcons
                        size={25}
                        style={styles.labelIcon}    
                        name={'date-range'}
                    />
                );
            case 'قد (سانتی متر)':
                return(
                    <FontAwesome5
                        size={23}
                        style={styles.labelIcon}    
                        name={'ruler-vertical'}
                    />
                );
            case 'وزن (کیلوگرم)':
                return(
                    <FontAwesome5
                        size={24}
                        style={styles.labelIcon}    
                        name={'weight'}
                    />
                );
            case "رمز عبور":
            case "تکرار رمز عبور":
                return(
                    <Image
                        source={require('SmartFamily/assets/images/lockIcon.png')}
                        style={styles.lockIcon}    
                    />
                )
        }
    }

    return (
        <View style={styles.mainContainer}>
            <View style={styles.inputWrapper}>
                {dropDown ?
                    (
                        <Picker
                            selectedValue={value}
                            style={{width: '65%'}}
                            onValueChange={onUpdate}
                        >
                            <Picker.Item label="زن" value="woman" />
                            <Picker.Item label="مرد" value="man" />
                        </Picker>
                    )
                :
                    (
                        <TextInput
                            value={value}
                            onChangeText={onUpdate}
                            style={styles.textInput}
                            placeholder={placeholder}
                            keyboardType={keyboardType}
                            secureTextEntry={secureTextEntry}
                            onFocus={onFocus}
                            onBlur={onBlur}
                        />
                    )
                }

                <View style={styles.border}/>
                <View style={styles.inputLabel}>
                    <IranSansText style={styles.labelText}>
                        {labelText}
                    </IranSansText>
                    <View style={styles.iconContainer}>
                        {renderIcon()}
                    </View>
                </View>
            </View>
            {!!inputDescription &&(
                <IranSansText
                fontWeight="Light"
                style={styles.inputDescription}
                >
                    {inputDescription}
                </IranSansText>
            )}
        </View>
    )
};

const styles = StyleSheet.create({
    mainContainer:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-end',
    },
    inputWrapper:{
        textAlign: 'center',
        width: '100%',
        height: 38,
        borderRadius: 6,
        backgroundColor: '#fff',
        flexDirection: 'row',
        alignItems: 'center',
      },
      textInput:{
        fontFamily: 'iranSans',
        width: '65%',
        textAlign: 'right',
        textAlignVertical: 'center',
        paddingBottom: 5,
        paddingRight: 15,
        fontSize: 12,
      },
      border:{
        width: 1,
        height: '60%',
        backgroundColor: '#000',
        borderRadius: 5,
      },
      inputLabel:{
        height: '100%',
        width: '35%',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
      },
      iconContainer:{
          width: 41,
          height: '100%',
          justifyContent: 'center',
          alignItems: 'center',
      },
      labelText:{
          fontSize: 11,
      },
      lockIcon:{
          width: 20,
          height: 20,
          resizeMode: 'contain',
          marginHorizontal: 10,
      },
      labelIcon:{
        //   marginHorizontal: 10,
      },
      inputDescription:{
        color: '#fff',
        width: '76%',
        marginTop: 3,
        marginRight: 20,
        fontSize: 13,
      }
})