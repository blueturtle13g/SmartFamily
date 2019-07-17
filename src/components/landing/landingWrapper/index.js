import React from 'react';
import { View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import FamilyTitleImage from '../familyTitleImage';
import Colors from 'SmartFamily/src/constants/Colors';

export default ({children})=>{
  return (
        <LinearGradient
            style={{flex: 1}}
            colors={Colors.landingColors}
        >
            <FamilyTitleImage/>
            <View style={{flex: 1}}>
                {children}
            </View>
        </LinearGradient>
    );
};
