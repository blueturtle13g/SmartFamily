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

  _onSubmit = ()=>{
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
