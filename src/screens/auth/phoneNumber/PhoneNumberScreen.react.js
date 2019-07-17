import React from 'react';
import {
  AsyncStorage,
  TextInput,
  View,
  Text,
} from 'react-native';
import styles from './PhoneNumberScreen.style';
import axios from 'axios';
import { BASE_URL } from 'SmartFamily/src/constants/Api';
import LandingWrapper from 'SmartFamily/src/components/landing/landingWrapper';
import LandingButton from 'SmartFamily/src/components/landing/landingButton';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { convertToPersianNumbers } from 'SmartFamily/src/utils';

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

  _onSubmit = async ()=>{
    const { phoneNumber } = this.state;
    if(phoneNumber.length<11){
      return;
    }
    try{
      const res = await axios.post(BASE_URL+'Identity/Api/Account/SignUp?dto.phone='+phoneNumber);
      console.log('res: ', res);
      if(res.data.isSuccess){
        this.props.navigation.navigate('ConfirmCodeScreen');
      }
    }catch(e){
      console.log('e: ', e)
    }
  }


  render() {
    const { loading, verifying, phoneNumber } = this.state;
    return(
      <LandingWrapper>
        <View style={styles.mainContainer}>
          <View style={styles.inputContainer}>
            <View style={styles.inputWrapper}>
              <TextInput
                value={convertToPersianNumbers(phoneNumber)}
                onChangeText={phoneNumber=>this.setState({phoneNumber})}
                style={styles.textInput}
                placeholder={convertToPersianNumbers("09000000000")}
                keyboardType="phone-pad"
                contextMenuHidden={true}
              />
              <View style={styles.inputLabel}>
                <Text style={styles.labelText}>شماره موبایل</Text>
                <FontAwesome size={30} name={'mobile-phone'} style={styles.labelIcon}/>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.progressBarCntainer}>

        </View>
        <View style={styles.buttonContainer}>
            <LandingButton onPress={this._onSubmit}/>
        </View>
      </LandingWrapper>
    )
  }
}
