import React from 'react';
import {
    View,
    StyleSheet,
    Image,
    TouchableOpacity
} from 'react-native';
import IranSansText from 'SmartFamily/src/components/iranSansText';
import Colors from 'SmartFamily/src/constants/Colors';

export default ({
    product:{
        image,
        title,
        pack,
        description,
        eachText,
        price,
    },
    onPress,
})=>{
    return (
        <TouchableOpacity
            onPress={onPress}
            style={styles.mianContainer}
        >
            <View style={styles.infoContainer}>
                <View style={styles.priceContainer}>
                    <IranSansText
                        style={styles.eachText}
                    >
                        {eachText}
                    </IranSansText>
                    <IranSansText
                        style={styles.price}
                    >
                        {price}
                    </IranSansText>
                </View>
                <View style={styles.titleDescriptionContainer}>
                    <IranSansText
                        style={styles.title}
                    >
                        {title} - {pack}
                    </IranSansText>
                    <IranSansText
                        style={styles.description}
                    >
                        {description}
                    </IranSansText>
                </View>
            </View>
            <View style={styles.imageContainer}>
                <Image
                    source={require('SmartFamily/assets/images/veg.png')}
                    style={styles.image}
                />
            </View>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    mianContainer:{
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'center',
        marginVertical: 15,
        backgroundColor: '#fff',
        height: 70,
        overflow: 'hidden',
        borderRadius: 6,
        elevation: 3,
    },
    imageContainer:{
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#B2E7ED'
    },
    image:{
        width: '60%',
        height: '60%',
        resizeMode: 'contain',
    },
    infoContainer:{
        flexDirection: 'row',
        flex: 8,
        overflow: 'hidden',
    },
    titleDescriptionContainer:{
        flex: 2.8,
        // backgroundColor: 'green',
        justifyContent: 'center',
        paddingRight: 12,
    },
    title:{
        fontSize: 12,
    },
    description:{
        fontSize: 10,
        color: 'grey',
    },
    priceContainer:{
        flex: 1.2,
        // backgroundColor: 'blue',
        justifyContent: 'center',
        alignItems: 'center',
    },
    eachText:{
        fontSize: 11,
    },
    price:{
        fontSize: 11,
        color: Colors.statusbar    
    }
})
