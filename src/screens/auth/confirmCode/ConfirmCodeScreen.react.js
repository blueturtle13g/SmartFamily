import React from 'react';
import {
  ActivityIndicator,
  TouchableOpacity,
  TextInput,
  Text,
  View,
} from 'react-native';
import styles from './ConfirmCodeScreen.style';
import axios from 'axios';

export default class ConfirmCodeScreen extends React.Component {
  state = {
    loading: false,
    confirmCode: '',
  };

  _onSubmit = ()=>{
    this.props.navigation.navigate('PasswordScreen')
  };

  render() {
    const { loading, confirmCode } = this.state;
    
    return (
      <View style={styles.mainContainer}>
        <View style={styles.inputContainer}>
          <TextInput
            value={confirmCode}
            onChangeText={confirmCode=>this.setState({confirmCode})}
            style={styles.textInput}
            placeholder="Your Code"
            keyboardType="number-pad"
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
