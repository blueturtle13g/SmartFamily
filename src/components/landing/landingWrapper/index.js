import React from 'react';
import { View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import FamilyTitleImage from '../familyTitleImage';
import Colors from 'SmartFamily/src/constants/Colors';

export default ({keyboardOpen, children, onBackPress})=>{
  return (
        <LinearGradient
            style={{flex: 1}}
            colors={Colors.landingColors}
        >
            <FamilyTitleImage keyboardOpen={keyboardOpen} onBackPress={onBackPress}/>
            <View style={{flex: 1}}>
                {children}
            </View>
        </LinearGradient>
    );
};
