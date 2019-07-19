import React from 'react';
import { View, StyleSheet } from 'react-native';

export default ({count, activeDot})=>{
    return (
        <View style={styles.mainContainer}>
            {[...Array(count)].map((_, i) =>
                <View
                    key={i}
                    style={[
                        styles.dot,
                        activeDot===i && styles.activeDot
                    ]}
                />
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer:{
        flexDirection: 'row',
    },
    dot:{
        width: 8,
        height: 8,
        borderRadius: 20,
        backgroundColor: 'grey',
        marginHorizontal: 2,
    },
    activeDot:{
        backgroundColor: '#fff',
    }
})