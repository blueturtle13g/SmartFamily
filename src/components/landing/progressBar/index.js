import React from 'react';
import { View, StyleSheet } from 'react-native';

export default ({percentage})=>(
    <View style={styles.progressBar}>
        <View style={[styles.progressView, {width: percentage+'%'}]}/>
    </View>
);

const styles = StyleSheet.create({
    progressBar:{
        width: '85%',
        height: 7.5,
        borderRadius: 15,
        backgroundColor: '#1A98A7',
        overflow: 'hidden',
        alignItems: 'flex-end',
      },
    progressView:{
        backgroundColor: '#fff',
        height: '100%',
    }
})