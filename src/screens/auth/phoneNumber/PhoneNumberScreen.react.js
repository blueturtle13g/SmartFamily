import React from 'react';
import { View } from 'react-native';
import styles from './PhoneNumberScreen.style';
import axios from 'axios';
import { BASE_URL } from 'SmartFamily/src/constants/Api';
import LandingWrapper from 'SmartFamily/src/components/landing/landingWrapper';
import LandingButton from 'SmartFamily/src/components/landing/landingButton';
import { convertToPersianNumbers } from 'SmartFamily/src/utils';
import InputWithLabel from 'SmartFamily/src/components/landing/inputWithLabel';
import ProgressBar from 'SmartFamily/src/components/landing/progressBar';
import { connect } from 'react-redux';

class PhoneNumberScreen extends React.Component {
  state = {
    phoneNumber: '',
  };

  _onSubmit = async ()=>{
    const { phoneNumber } = this.state;
    this.props.navigation.navigate('ConfirmCodeScreen');
    return;

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
    const { keyboardOpen } = this.props;
    const { phoneNumber } = this.state;
    return(
      <LandingWrapper keyboardOpen={keyboardOpen}>
        <View style={styles.inputContainer}>
          <InputWithLabel
            value={phoneNumber}
            onChangeText={phoneNumber=>this.setState({phoneNumber})}
            placeholder={"09000000000"}
            keyboardType="phone-pad"
            labelText="شماره موبایل"
          />
        {!keyboardOpen &&<View style={{flex: 1}}/>}
        </View>
        {!keyboardOpen &&(
          <View style={styles.progressBarContainer}>
            <ProgressBar percentage={35}/>
          </View>
        )}
        <View style={[styles.buttonContainer]}>
          {phoneNumber.length===11 &&(<LandingButton title={'ثبت شماره موبایل'} onPress={this._onSubmit}/>)}
        </View>
      </LandingWrapper>
    )
  }
}

const mapStateToProps = ({keyboardOpen})=>{
  return {keyboardOpen}
}

export default connect(mapStateToProps)(PhoneNumberScreen);
