import React from 'react';
import { View } from 'react-native';
import styles from './PhoneNumberScreen.style';
import axios from 'axios';
import { BASE_URL } from 'SmartFamily/src/constants/Api';
import LandingWrapper from 'SmartFamily/src/components/landingWrapper';
import MainButton from 'SmartFamily/src/components/buttons/main';
import InputWithLabel from 'SmartFamily/src/components/inputWithLabel';
import ProgressBar from '../components/progressBar';
import { connect } from 'react-redux';
import IranSansText from 'SmartFamily/src/components/iranSansText';

class PhoneNumberScreen extends React.Component {
  state = {
    phoneNumber: '',
    tehranAccount: '',
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
    const { phoneNumber, tehranAccount } = this.state;
    return(
      <LandingWrapper keyboardOpen={keyboardOpen}>
        <View style={styles.inputsContainer}>
          <InputWithLabel
            value={phoneNumber}
            onUpdate={phoneNumber=>this.setState({phoneNumber})}
            placeholder={"09000000000"}
            keyboardType="phone-pad"
            labelText="شماره موبایل"
          />
          {!keyboardOpen &&(
            <View pointerEvents={'none'} style={styles.borderContainer}>
              <View style={styles.border}/>
              <IranSansText fontWeight={'Medium'} style={styles.borderText}>و یا</IranSansText>
              <View style={styles.border}/>
            </View>
          )}
          <InputWithLabel
            value={tehranAccount}
            onUpdate={tehranAccount=>this.setState({tehranAccount})}
            labelText="کاربر تهران من"
            inputDescription={
              !keyboardOpen &&
              'نام کاربری شما در www.my.tehran.ir'
            }
          />
        </View>
        {!keyboardOpen &&(
          <View style={styles.progressBarContainer}>
            <ProgressBar percentage={35}/>
          </View>
        )}
        <View style={[styles.buttonContainer]}>
          {(phoneNumber.length===11 || tehranAccount !== '') &&(
            <MainButton
              title={'تایید'}
              onPress={this._onSubmit}
            />
          )}
        </View>
      </LandingWrapper>
    )
  }
}

const mapStateToProps = ({keyboardOpen})=>{
  return {keyboardOpen}
}

export default connect(mapStateToProps)(PhoneNumberScreen);
