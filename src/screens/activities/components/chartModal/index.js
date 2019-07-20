import Modal from "react-native-modal";
import React from 'react';
import {
    View,
    TouchableOpacity,
    Image,
} from 'react-native';
import styles from './styles';
import IranSansText from 'SmartFamily/src/components/iranSansText';
import ModalHeader from 'SmartFamily/src/components/modalHeader';
import Border from 'SmartFamily/src/components/border';

export default ({isVisible, onHide})=>{
    return (
        <Modal
            isVisible={isVisible}
            onBackButtonPress={onHide}
            onBackdropPress={onHide}
            style={styles.modal}
        >
            <View style={styles.mainContainer}>
                <ModalHeader
                    title={'پیشنهاد ما برای مصرف شما در طول یک هفته'}
                    onHide={onHide}
                />
                <Border/>
                <Image
                    style={styles.image}
                    source={require('SmartFamily/assets/images/chart.png')}
                />
            </View>
        </Modal>
    )
}