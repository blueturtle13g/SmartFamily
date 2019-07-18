import React from 'react';
import { View } from 'react-native';
import styles from './PasswordScreen.style';
import axios from 'axios';
import { BASE_URL } from 'SmartFamily/src/constants/Api';
import InputWithLabel from 'SmartFamily/src/components/landing/inputWithLabel';
import ProgressBar from 'SmartFamily/src/components/landing/progressBar';
import LandingWrapper from 'SmartFamily/src/components/landing/landingWrapper';
import LandingButton from 'SmartFamily/src/components/landing/landingButton';
import { connect } from 'react-redux';
import IranSansText from 'SmartFamily/src/components/iranSansText';

class PasswordScreen extends React.Component {
  state = {
    loading: false,
    password: '',
    confirmPassword: '',
  };

  _onSubmit = async ()=>{
    this.props.navigation.navigate('RestaurantQuestionScreen')
    return;

    try{
      const res = await axios.post(BASE_URL+'Identity/Api/Account/SignUp?dto.phone='+phoneNumber);
      if(res.data.isSuccess){
        this.props.navigation.navigate('RestaurantQuestionScreen')
      }
    }catch(e){
      console.log('e: ', e)
    }
  }

  render() {
    const { keyboardOpen } = this.props;
    const { loading, password, confirmPassword } = this.state;
    const isPasswordValid = password===confirmPassword && password.length>5;
    return(
      <LandingWrapper
        keyboardOpen={keyboardOpen}
        onBackPress={()=>this.props.navigation.goBack()}
      >
        <View style={styles.inputsContainer}>
          <InputWithLabel
            value={password}
            onChangeText={password=>this.setState({password})}
            placeholder="******"
            secureTextEntry
            labelText="رمز عبور"
            inputDescription={
              !keyboardOpen
              ?
                "رمز عبور باید حداقل شامل ۶ کاراکتر باشد."
              :
                ""
            }
          />

          <InputWithLabel
            value={confirmPassword}
            onChangeText={confirmPassword=>this.setState({confirmPassword})}
            placeholder="******"
            secureTextEntry
            labelText="تکرار رمز عبور"
            inputDescription={!keyboardOpen ?
              "رمز عبور باید حداقل شامل ۶ کاراکتر باشد."
              :
              ""
            }
          />

        </View>
        {!keyboardOpen &&(
          <View style={styles.progressBarContainer}>
            <ProgressBar percentage={isPasswordValid ? 100 : 70}/>
          </View>
        )}
        <View style={[styles.buttonContainer, keyboardOpen &&{flex: .7}]}>
          {isPasswordValid &&(<LandingButton title={'ورود به اسمارت فمیلی'} onPress={this._onSubmit}/>)}
        </View>
      </LandingWrapper>
    );
  }
}

const mapStateToProps = ({keyboardOpen})=>{
  return {keyboardOpen}
}

export default connect(mapStateToProps)(PasswordScreen);
