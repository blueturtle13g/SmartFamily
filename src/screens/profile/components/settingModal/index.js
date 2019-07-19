import Modal from "react-native-modal";
import React from 'react';
import {
    View,
    TouchableOpacity,
} from 'react-native';
import styles from './styles';
import IranSansText from 'SmartFamily/src/components/iranSansText';
import ModalForm from '../modalForm';
import MedicalQuestions from '../medicalQuestions';

class SettingModal extends React.Component{
    state={
        isAdding: false,
    }

    render(){
        const {isVisible, onHide} = this.props;
        const { isAdding } = this.state;

        return (
            <Modal
                isVisible={isVisible}
                onBackButtonPress={onHide}
                onBackdropPress={onHide}
                style={styles.modal}
            >
                <View style={styles.mainContainer}>
                    {isAdding ?
                        (
                            <MedicalQuestions
                                onHide={()=>this.setState({isAdding: false})}
                                onUpdate={()=>{}}
                            />
                        )
                        :
                        (
                            <ModalForm
                                onUpdate={()=>{}}
                                onHide={onHide}
                            />
                        )
                    }
                    <TouchableOpacity
                        onPress={()=>{
                            if(isAdding){
                                this.setState({isAdding: false})
                            }else{
                                this.setState({isAdding: true})
                            }
                        }}
                        style={styles.submitButton}
                    >
                        <IranSansText
                            style={styles.submitText}
                            fontWeight="Medium"
                        >
                            {
                                isAdding ? 'افزودن' : 'تایید و ادامه'
                            }
                            
                        </IranSansText>
                    </TouchableOpacity>
                </View>
            </Modal>
        )
    }
}

export default SettingModal;