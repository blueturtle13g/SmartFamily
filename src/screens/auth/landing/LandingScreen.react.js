import React from 'react';
import {
  AsyncStorage,
  ActivityIndicator,
  Text,
  View,
  Keyboard,
} from 'react-native';
import styles from './LandingScreen.style';
import axios from 'axios';
import LandingWrapper from 'SmartFamily/src/components/landing/landingWrapper';
import LandingButton from 'SmartFamily/src/components/landing/landingButton';
import { KEYBOARD_OPEN } from 'SmartFamily/src/store/redux/types';
import { updateProp } from 'SmartFamily/src/store/redux/actions';
import { connect } from 'react-redux';

class LandingScreen extends React.Component {
  state = {
    verifying: true,
  };


  async componentDidMount() {
    this.keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      this._keyboardDidShow,
    );
    this.keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      this._keyboardDidHide,
    );

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

    } catch (e) {
      this.setState({ verifying: false });
    }
  };

  componentWillUnmount() {
    this.keyboardDidShowListener.remove();
    this.keyboardDidHideListener.remove();
  }

  _keyboardDidShow =()=>this.props.updateProp(KEYBOARD_OPEN, true);
  _keyboardDidHide =()=>this.props.updateProp(KEYBOARD_OPEN, false);

  _onSubmit = ()=>{
    this.props.navigation.navigate('PhoneNumberScreen');
  }

  render() {
    const { verifying, } = this.state;
    if(verifying){
      return <ActivityIndicator style={styles.loadingIndicator} size="large"/>
    }
    return (
        <LandingWrapper>
            <View style={styles.descriptionContainer}>
                <Text style={[styles.description, styles.mainDescription]}>دوست داری سبک زندگی بهتری داشته باشی؟!</Text>
                <Text style={styles.description}>ما کمک میکنیم رژیم غذایی سالم تری داشته باشید</Text>
                <Text style={styles.description}>بیشتر تفریح کنید</Text>
                <Text style={styles.description}>راحت تر رفت و آمد کنید</Text>
                <Text style={styles.description}>و پول کمتری خرج کنید</Text>
            </View>
            <View style={styles.buttonContainer}>
                <LandingButton title={'ورود به برنامه'} onPress={this._onSubmit}/>
            </View>
        </LandingWrapper>
    );
  }
}

export default connect(null, { updateProp })(LandingScreen);
