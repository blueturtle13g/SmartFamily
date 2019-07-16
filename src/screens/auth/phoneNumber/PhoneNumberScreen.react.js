import React from 'react';
import {
  AsyncStorage,
  ActivityIndicator,
  TouchableOpacity,
  TextInput,
  Text,
  View,
} from 'react-native';
import styles from './PhoneNumberScreen.style';
import axios from 'axios';

export default class PhoneNumberScreen extends React.Component {
  state = {
    loading: false,
    verifying: true,
    phoneNumber: '',
  };

  async componentDidMount() {
    try {
      const jwtAccessToken = await AsyncStorage.getItem('jwtAccessToken');
      if (!jwtAccessToken) {
        this.setState({ verifying: false });
        return;
      }

      const response = await axios({
        method: 'get',
        url: `${utility.apiBaseUrl}user`,
        headers: {
          'Content-Type': 'application/json',
          Authorization: jwtAccessToken,
        },
      });
      const {
        success,
        user,
      } = response.data;

      if (!success) {
        this.setState({ verifying: false });
        return;
      }

      // TODO: navigate the user to main screens

    } catch (e) {
      this.setState({ verifying: false });
    }
  };

  _onSubmit = ()=>{
    this.props.navigation.navigate('ConfirmCodeScreen')
  }


  render() {
    const { loading, verifying, phoneNumber } = this.state;
    if(verifying){
      return <ActivityIndicator style={styles.loadingIndicator} size="large"/>
    }
    return (
      <View style={styles.mainContainer}>
        <View style={styles.inputContainer}>
          <TextInput
            value={phoneNumber}
            onChangeText={phoneNumber=>this.setState({phoneNumber})}
            style={styles.textInput}
            placeholder="Phone Number"
            keyboardType="phone-pad"
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
