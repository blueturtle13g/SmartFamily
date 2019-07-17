import React from 'react';
import {
  ActivityIndicator,
  TouchableOpacity,
  TextInput,
  Text,
  View,
} from 'react-native';
import styles from './PasswordScreen.style';
import axios from 'axios';

export default class PasswordScreen extends React.Component {
  state = {
    loading: false,
    password: '',
    confirmPassword: '',
  };

  _onSubmit = async ()=>{
    const { phoneNumber } = this.state;
    if(phoneNumber.length<11){
      return;
    }
    try{
      const res = await axios.post(BASE_URL+'Identity/Api/Account/SignInVerification?dto.phone='+phoneNumber);
      if(res.data.isSuccess){
        this.props.navigation.navigate('ConfirmCodeScreen');
      }
    }catch(e){
      console.log('e: ', e)
    }
    this.props.navigation.navigate('FamilyMembersScreen')
    
  }


  render() {
    const { loading, password, confirmPassword } = this.state;
    
    return (
      <View style={styles.mainContainer}>
        <View style={styles.inputContainer}>
          <TextInput
            value={password}
            onChangeText={password=>this.setState({password})}
            style={styles.textInput}
            placeholder="Password"
            secureTextEntry
          />
          <TextInput
            value={confirmPassword}
            onChangeText={confirmPassword=>this.setState({confirmPassword})}
            style={styles.textInput}
            placeholder="Confirm Password"
            secureTextEntry
          />
        </View>

        <TouchableOpacity
          onPress={this._onSubmit}
          style={styles.submitButton}
        >
          <Text>Submit</Text>
          {loading &&<ActivityIndicator style={styles.buttonLoading} />}
        </TouchableOpacity>
      </View>
    );
  }
}
