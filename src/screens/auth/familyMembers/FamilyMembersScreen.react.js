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
import AddMemberButton from './components/addMemberButton';

export default class FamilyMembersScreen extends React.Component {
  state = {
    loading: false,
    modalVisible: false,
    members: [],
  };

  _onSubmit = ()=>{
    this.props.navigation.navigate('WelcomeScreen')
  };

  _onSubmitMember = member=>{
    const { members } = this.state;
    if(member.id !== undefined){
      this.setState({
        modalVisible: false,
        members: members.map(m=>{
          return m.id === member.id ? member : m
        })
      })
      return;
    }

    this.setState({
        members: members.concat({
            ...member,
            id: members.length>0 ? members[members.length-1].id+1 : 0
        }),
        modalVisible: false
    });
  };

  _onPlusButtonPress = ()=>{
    this.props.navigation.navigate('MemberFormScreen', {
      onSubmit: this._onSubmitMember,
    })
  }

  _onModifyMemberPress = member=>{
    this.props.navigation.navigate('MemberFormScreen', {
      onSubmit: this._onSubmitMember,
      member,
    })
  }

  render() {
    const {
      members,
    } = this.state;
    console.log('members: ', members)
    return (
      <View style={styles.mainContainer}>
        <View style={styles.topContainer}>
          <Text style={styles.title}>Members</Text>
        </View>

        <View style={styles.bottomContainer}>
            <View style={styles.membersContainer}>
                {members.map(member=>
                  <FamilyMemberCard
                    key={member.id}
                    member={member}
                    onModifyPress={()=>this._onModifyMemberPress(member)}
                  />
                )}
                <AddMemberButton onPress={this._onPlusButtonPress}/>
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
      </View>
    );
  }
}
