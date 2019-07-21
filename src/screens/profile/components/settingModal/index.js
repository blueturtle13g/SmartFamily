import Modal from "react-native-modal";
import React from 'react';
import {
    View,
    TouchableOpacity,
} from 'react-native';
import styles from './styles';
import IranSansText from 'SmartFamily/src/components/iranSansText';
import ModalForm from '../modalForm';
import MedicalCases from '../medicalCases';
import { connect } from 'react-redux';

const INITIAL_STATE = {
    isAdding: false,
    name: 'خودم',
    phoneNumber: '',
    gender: 'woman',
    age: '',
    height: '',
    weight: '',
    medicalCases: [],
    activeInput: null,
};

class SettingModal extends React.Component{
    state= {
        ...INITIAL_STATE,
        phoneNumber: this.props.phoneNumber,
    };

    _onUpdate = (k,v)=>{
        console.log('k, v: ', k, v)
        this.setState({[k]: v})
    }

    _onHide = ()=>{
        this.setState(INITIAL_STATE);
        this.props.onHide()
    }

    _onUpdateCase = cas=>{
        const { medicalCases } = this.state;
        this.setState({
            medicalCases: this.state.medicalCases.includes(cas)
                ?
                    medicalCases.filter(thisCase=>thisCase!==cas)
                :
                    medicalCases.concat(cas)
        })
    }

    render(){
        const {isVisible} = this.props;
        const {
            isAdding,
            medicalCases,
            activeInput,
        } = this.state;

        return (
            <Modal
                isVisible={isVisible}
                onBackButtonPress={this._onHide}
                onBackdropPress={this._onHide}
                style={styles.modal}
            >
                {isAdding &&(
                    <View style={styles.backgroundCard}/>
                )}
                <View style={styles.mainContainer}>
                    {isAdding ?
                        (
                            <MedicalCases
                                onHide={()=>this.setState({isAdding: false})}
                                onUpdateCase={this._onUpdateCase}
                                cases={medicalCases}
                            />
                        )
                        :
                        (
                            <ModalForm
                                onUpdate={this._onUpdate}
                                onHide={this._onHide}
                                form={this.state}
                                activeInput={activeInput}
                            />
                        )
                    }
                    <TouchableOpacity
                        onPress={()=>{
                            if(isAdding){
                                this._onHide()
                                this.props.onDone();
                                this.setState({isAdding: false})
                            }else{
                                this.setState({
                                    isAdding: true
                                })
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

const mapStateToProps= ({phoneNumber})=>{
    return{
        phoneNumber
    }
}

export default connect(mapStateToProps)(SettingModal);