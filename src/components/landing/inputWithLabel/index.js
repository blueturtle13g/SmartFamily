import React from 'react';
import {
    View,
    TextInput,
    Image,
    StyleSheet,
    Text,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default ({
    keyboardType,
    value,
    onChangeText,
    placeholder,
    labelText,
    secureTextEntry,
})=>{
    return (
        <View style={styles.inputWrapper}>
            <TextInput
                value={value}
                onChangeText={onChangeText}
                style={styles.textInput}
                placeholder={placeholder}
                keyboardType={keyboardType}
                secureTextEntry={secureTextEntry}
            />
            <View style={styles.inputLabel}>
                <Text style={styles.labelText}>{labelText}</Text>
                {keyboardType==="phone-pad" ?
                    <FontAwesome
                        size={30}
                        name={'mobile-phone'}
                        style={styles.labelIcon}
                    />
                    :
                    <Image
                        source={require('SmartFamily/assets/lockIcon.png')}
                        style={styles.lockIcon}    
                    />
                }
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    inputWrapper:{
        textAlign: 'center',
        paddingVertical: 9,
        width: '85%',
        height: 38,
        borderRadius: 3,
        backgroundColor: '#fff',
        flexDirection: 'row',
      },
      textInput:{
        // backgroundColor: '#ccc',
        height: '100%',
        width: '65%',
        textAlign: 'right',
        textAlignVertical: 'center',
        padding: 0,
        paddingRight: 15,
        borderRightWidth: 1,
        borderColor: '#000',
        fontWeight: 'bold',
    
      },
      inputLabel:{
        height: '100%',
        width: '35%',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
      },
      lockIcon:{
          width: 20,
          height: 20,
          resizeMode: 'contain',
          marginHorizontal: 6,
      },
      labelIcon:{
          marginHorizontal: 6,
      },
})