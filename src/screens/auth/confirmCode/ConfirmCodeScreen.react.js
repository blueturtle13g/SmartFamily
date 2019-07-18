import React from 'react';
import { View } from 'react-native';
import styles from './ConfirmCodeScreen.style';
import axios from 'axios';
import { BASE_URL } from 'SmartFamily/src/constants/Api';
import InputWithLabel from 'SmartFamily/src/components/landing/inputWithLabel';
import ProgressBar from 'SmartFamily/src/components/landing/progressBar';
import LandingWrapper from 'SmartFamily/src/components/landing/landingWrapper';
import LandingButton from 'SmartFamily/src/components/landing/landingButton';
import { connect } from 'react-redux';
import IranSansText from 'SmartFamily/src/components/iranSansText';

class ConfirmCodeScreen extends React.Component {
  state = {
    loading: false,
    confirmCode: '',
  };

  _onSubmit = async ()=>{
    this.props.navigation.navigate('PasswordScreen');
    return;

    try{
      const res = await axios.post(BASE_URL+'Identity/Api/Account/SignUp?dto.phone='+phoneNumber);
      if(res.data.isSuccess){
        this.props.navigation.navigate('PasswordScreen');
      }
    }catch(e){
      console.log('e: ', e)
    }
  }

  render() {
    const { keyboardOpen } = this.props;
    const { loading, confirmCode } = this.state;
    return(
      <LandingWrapper
        keyboardOpen={keyboardOpen}
        onBackPress={()=>this.props.navigation.goBack()}
      >
        <View style={styles.inputContainer}>
          <InputWithLabel
            secureTextEntry
            value={confirmCode}
            onChangeText={confirmCode=>this.setState({confirmCode})}
            style={styles.textInput}
            placeholder="*****"
            keyboardType="number-pad"
            onChangeText={confirmCode=>this.setState({confirmCode})}
            labelText="کد تایید"
            inputDescription="کد تایید ۵ رقمی پیامک شده را وارد کنید."
          />
          <View style={{flex: 1}}/>
        </View>
        {!keyboardOpen &&(
          <View style={styles.progressBarContainer}>
            <ProgressBar percentage={70}/>
          </View>
        )}
        <View style={[styles.buttonContainer, keyboardOpen &&{justifyContent: 'center'}]}>
          {confirmCode.length===5 &&(<LandingButton title={'ثبت کد تایید'} onPress={this._onSubmit}/>)}
        </View>
      </LandingWrapper>
    );
  }
}

const mapStateToProps = ({keyboardOpen})=>{
  return {keyboardOpen}
}

export default connect(mapStateToProps)(ConfirmCodeScreen);
