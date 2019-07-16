import React from 'react';
import {
  ActivityIndicator,
  TouchableOpacity,
  TextInput,
  Text,
  View,
  Modal,
} from 'react-native';
import styles from './FamilyMembersScreen.style';
import axios from 'axios';
import FamilyMemberCard from './components/familyMemberCard';
import AddMemberModal from './components/addMemberModal';
import AntDesign from 'react-native-vector-icons/AntDesign';

export default class FamilyMembersScreen extends React.Component {
  state = {
    loading: false,
    modalVisible: false,
    members: [],
  };

  _onSubmit = ()=>{
    this.props.navigation.navigate('FamilyMembersScreen')
  };

  _onSubmitMember = member=>{
    const { members } = this.state;
    this.setState({
        members: members.concat({
            ...member,
            id: members.length>0 ? members[members.length-1].id+1 : 0
        }),
        modalVisible: false
    });
  };
  _toggleModal = ()=>this.setState({modalVisible: !this.state.modalVisible});

  render() {
    const {
      loading,
      modalVisible,
      members,
    } = this.state;
    return (
      <View style={styles.mainContainer}>
        <View style={styles.topContainer}>
          <Text style={styles.title}>Members</Text>
        </View>

        <View style={styles.bottomContainer}>
            <View style={styles.membersContainer}>
                {members.map(member=><FamilyMemberCard key={member.id} member={member}/>)}
                <TouchableOpacity
                    style={styles.plusButton}
                    onPress={this._toggleModal}
                >
                    <AntDesign
                        name={'plus'}
                        size={30}
                    />
                </TouchableOpacity>
            </View>

          {members.length>0 &&(
            <TouchableOpacity
              style={styles.submitButton}
              onPress={this._onSubmit}
              activeOpacity={.8}
            >
              <Text style={styles.buttonTitle}>Submit</Text>
            </TouchableOpacity>
          )}
        </View>
        <AddMemberModal
            visible={modalVisible}
            onSubmit={this._onSubmitMember}
            onCancel={this._toggleModal}
        />
      </View>
    );
  }
}
