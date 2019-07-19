import { View, Text } from 'react-native';
import React from 'react';

export default ({color, width})=>(
    <View style={{
        marginTop: 40,
        width: '100%',
        alignItems: 'center',
        height: 15,
        overflow: 'hidden',
    }}
    >
        <Text style={{
            width: width ? width+'%' : '80%',
            color: color || '#aaa',
            textAlign: 'center',
            letterSpacing: 1,
        }}>
            ***************************************************************
        </Text>
    </View>
);