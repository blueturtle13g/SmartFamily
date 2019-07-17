import React from 'react';
import { 
    View,
    Picker,
    TouchableOpacity,
    Text,
    TextInput,
    Modal,
} from 'react-native';
import styles from './MemberFormScreen.style';
import {
    FEMALE_SPECS,
    MALE_SPECS,
    BABY_SPECS,
}from 'SmartFamily/src/constants';
import MemberSpecificationsModal from './components/memberSpecificationsModal';

export default class MemberFormScreen extends React.Component{
    state={
        member: this.props.navigation.state.params.member !== undefined
            ?
                this.props.navigation.state.params.member
            :
                {
                    generation: 'Adult',
                    gender: 'Female',
                    age: '',
                    name: '',
                    specifications: FEMALE_SPECS,
                }
            ,
        modalVisible: false,
    };

    _onAddMember = ()=>{
        const { id, generation, gender } = this.state.member;
        let specifications;
        if(generation !== 'Adult'){
          this._specificationsTitle = 'Baby';
          specifications = BABY_SPECS;
        }else if(gender === 'Female'){
            this._specificationsTitle = 'Woman';
            specifications = FEMALE_SPECS;
        }else{
          this._specificationsTitle = 'Man';
          specifications = MALE_SPECS;
        }
        this.setState({
            modalVisible: true,
            member: {
                ...this.state.member,
                specifications,
            }
        });
      };
  
    _onUpdateMember = (k,v)=>this.setState({member: {...this.state.member, [k]: v}});
    _updateSpecifications = (t,value)=>{
        const { member } = this.state;
        this.setState({
            member: {
            ...member,
            specifications: member.specifications.map(spec=>
                spec.title === t ? {...spec, value} : spec
            )
            }
        });
    };
  
    _onSubmit = ()=>{
        const { state, goBack } = this.props.navigation;
        state.params.onSubmit(this.state.member);
        goBack();
    };

    _onHideModal = ()=>this.setState({modalVisible: false});

    render(){
        const {
            member:{
                generation,
                name,
                age,
                gender,
                specifications,
            },
            modalVisible,
        } = this.state;
        console.log('this.state.member: ', this.state.member);
        return (
            <View style={styles.mainContainer}>
                <View style={styles.inputContainer}>
                    <Picker
                        selectedValue={generation}
                        style={styles.picker}
                        onValueChange={v=>this._onUpdateMember('generation', v)}
                    >
                        <Picker.Item label="Adult" value="Adult" />
                        <Picker.Item label="Baby" value="Baby" />
                        <Picker.Item label="Infant" value="Infant" />
                    </Picker>
                    <Picker
                        selectedValue={gender}
                        style={styles.picker}
                        onValueChange={v=>this._onUpdateMember('gender', v)}
                    >
                        <Picker.Item label="Female" value="Female" />
                        <Picker.Item label="Male" value="Male" />
                    </Picker>

                    <TextInput
                        value={age}
                        onChangeText={v=>this._onUpdateMember('age', v)}
                        style={styles.textInput}
                        placeholder="age"
                        keyboardType="number-pad"
                    />

                    <TextInput
                        value={name}
                        onChangeText={v=>this._onUpdateMember('name', v)}
                        style={styles.textInput}
                        placeholder="name"
                    />
                </View>

                <TouchableOpacity
                    onPress={this._onAddMember}
                    style={styles.submitButton}
                >
                    <Text>Add</Text>
                </TouchableOpacity>
                <MemberSpecificationsModal
                    visible={modalVisible}
                    onHide={this._onHideModal}
                    specifications={specifications}
                    onUpdate={this._updateSpecifications}
                    onSubmit={this._onSubmit}
                    specificationsTitle={this._specificationsTitle}
                />
            </View>
        )
    }
}
