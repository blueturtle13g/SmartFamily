import React from 'react';
import {
    View,
    TextInput,
    Image,
    StyleSheet,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import IranSansText from 'SmartFamily/src/components/iranSansText';

export default ({
    keyboardType,
    value,
    onChangeText,
    placeholder,
    labelText,
    secureTextEntry,
    inputDescription,
})=>{
    return (
        <View style={styles.mainContainer}>
            <View style={styles.inputWrapper}>
                <TextInput
                    value={value}
                    onChangeText={onChangeText}
                    style={styles.textInput}
                    placeholder={placeholder}
                    keyboardType={keyboardType}
                    secureTextEntry={secureTextEntry}
                />
                <View style={styles.border}/>
                <View style={styles.inputLabel}>
                    <IranSansText style={styles.labelText}>{labelText}</IranSansText>
                    {keyboardType==="phone-pad" ?
                        <FontAwesome
                            size={30}
                            name={'mobile-phone'}
                            style={styles.labelIcon}
                        />
                        :
                        <Image
                            source={require('SmartFamily/assets/images/lockIcon.png')}
                            style={styles.lockIcon}    
                        />
                    }
                </View>
            </View>
            <IranSansText
              fontWeight="Light"
              style={styles.inputDescription}
            >
                {inputDescription}
            </IranSansText>
        </View>
    )
};

const styles = StyleSheet.create({
    mainContainer:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-end'
    },
    inputWrapper:{
        textAlign: 'center',
        width: '85%',
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
        height: '70%',
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
      labelText:{
          fontSize: 11,
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
      inputDescription:{
        color: '#fff',
        width: '76%',
        marginTop: 3,
        marginRight: 20,
        fontSize: 13,
      }
})