import React from 'react';
import {
  Modal,
  TouchableOpacity,
  TextInput,
  Text,
  View,
  Picker,
} from 'react-native';
import styles from './styles';
import {
    FEMALE_SPECS,
    MALE_SPECS,
    BABY_SPECS,
}from '../../../../../constants';
import MemberSpecifications from '../memberSpecifications';

const initialState = {
    isAdded: false,
    member:{
        generation: 'Adult',
        gender: 'Female',
        age: '',
        specifications: FEMALE_SPECS,
    },
};


export default class AddMemberScreen extends React.Component {
  state= initialState;
    _specificationsTitle = '';
  _onAddMember = ()=>{
      const { generation, gender } = this.state.member;
      let specifications;
      console.log('generation: ', generation);
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
          isAdded: true,
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
      this.props.onSubmit(this.state.member);
      console.log('initialState: ', initialState);
      this.setState(initialState);
  };

  render() {
    const {
      member:{
          generation,
          gender,
          age,
          specifications,
      },
      isAdded,
    } = this.state;
    const { visible, onSubmit } = this.props;

    return (
        <Modal
            animationType="slide"
            visible={visible}
        >
            {isAdded
            ?
                (
                    <MemberSpecifications
                        specifications={specifications}
                        onUpdate={this._updateSpecifications}
                        onSubmit={this._onSubmit}
                        specificationsTitle={this._specificationsTitle}
                    />
                )
            :
                (
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
                        </View>

                        <TouchableOpacity
                            onPress={this._onAddMember}
                            style={styles.submitButton}
                        >
                            <Text>Add</Text>
                        </TouchableOpacity>
                    </View>
                )
            }
      </Modal>
    );
  }
}
