import React, { Component } from 'react'
import styles from './ProfileScreen.style';
import { View, StatusBar, TouchableOpacity } from 'react-native';
import IranSansText from 'SmartFamily/src/components/iranSansText';
import DrawerButton from '../../components/navigation/DrawerButton';

export default class ProfileScreen extends Component {

    static navigationOptions = ({ navigation }) => {

        return{
            headerRight: <DrawerButton
                title={'خوش آمدید'}
                onPress={()=>{}}
            />
        }
    };

    render() {
        return (
            <View style={styles.mainContainer}>
                <StatusBar backgroundColor={'#1A98A7'}/>
                <IranSansText>hello there</IranSansText>
            </View>
        )
    }
}
