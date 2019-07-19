import React from 'react';
import {
    TouchableOpacity,
    StyleSheet,
    Image,
    View,
} from 'react-native';
import Colors from 'SmartFamily/src/constants/Colors';
import IranSansText from 'SmartFamily/src/components/iranSansText';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default function index({
    onPress,
    category:{
        name,
        title,
        description,
        discount,
    }
}) {
    let source;
    switch(name){
        case 'dairy':
            source = require('SmartFamily/assets/images/dairy.png')
            break;
        case 'fruits':
            source = require('SmartFamily/assets/images/fruits.png')
            break;
        case 'grocery':
            source = require('SmartFamily/assets/images/grocery.png')
            break;
        case 'junkFoods':
            source = require('SmartFamily/assets/images/junkFoods.png');
            break;
        case 'nuts':
            source = require('SmartFamily/assets/images/nuts.png')
            break;
        case 'protein':
            source = require('SmartFamily/assets/images/protein.png');
            break;
        case 'veg':
            source = require('SmartFamily/assets/images/veg.png')
    }
    return (
        <View
            style={styles.mainContainer}
        >
            <View style={styles.imageContainer}>
                {discount &&(
                    <View style={styles.discountContainer}>
                        <FontAwesome
                            name={'certificate'}
                            color={'#fe4060'}
                            size={30}
                            style={styles.discountBadge}
                        />
                        <View style={styles.discountTextContainer}>
                            <IranSansText style={styles.discountText}>
                                {discount}
                            </IranSansText>
                        </View>
                    </View>
                )}
                <Image
                    source={source}
                    style={styles.image}
                />
            </View>

            <View style={styles.infoContainer}>
                <IranSansText
                    style={styles.title}
                    fontWeight="Bold"
                >
                    {title}
                </IranSansText>
                <IranSansText
                    style={styles.description}                
                >
                    {description}
                </IranSansText>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer:{
        borderRadius: 3,
        backgroundColor: '#fff',
        width: 145,
        height: 175,
        marginVertical: 8,
        borderColor: Colors.main,
        overflow: 'hidden',
        elevation: 2,
    },
    imageContainer:{
        height: '68%',
        width: '100%',
        backgroundColor: '#B2E7ED',
        justifyContent: 'center',
        alignItems: 'center',
    },
    discountContainer:{
        position: 'absolute',
        top: 5,
        left: 5,
    },
    discountTextContainer:{
        position: 'absolute',
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: 'blue',
    },
    discountText:{
        fontSize: 8,
        color: '#fff',
        marginTop: 2,
    },
    image:{
        marginTop: 10,
        height: '65%',
        width: '65%',
        resizeMode: 'contain',

    },
    infoContainer:{
        height: '32%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'flex-end',
        paddingRight: 15,
    },
    title:{
        fontSize: 13,
        color: '#7F7F7F',
    },
    description:{
        fontSize: 10,
        color: '#CCCCCC',
    }
})