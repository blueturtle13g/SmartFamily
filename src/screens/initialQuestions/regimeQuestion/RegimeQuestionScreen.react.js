import React from 'react';
import {
  TouchableOpacity,
  Text,
  View,
  Image,
} from 'react-native';
import styles from './RegimeQuestionScreen.style';
import axios from 'axios';
import LandingWrapper from 'SmartFamily/src/components/landing/landingWrapper';
import LandingButton from 'SmartFamily/src/components/landing/landingButton';
import Dots from 'SmartFamily/src/components/questions/dots';
import CheckBoxes from 'SmartFamily/src/components/questions/checkBoxes';

export default class RegimeQuestionScreen extends React.Component {
  state = {
    regimes: [],
  };

  _onSubmit = ()=>{
    this.props.navigation.navigate('');
  };

  _onUpdateRegimes = i=>{
    const { regimes } = this.state;
    this.setState({
      regimes: regimes.includes(i) ?
        regimes.filter(r=>r!==i)
        :
        regimes.concat(i)
    })
  }

  render() {
    const { regimes } = this.state;
    return (
        <LandingWrapper onBackPress={()=>this.props.navigation.goBack()}>
            <View style={styles.questionContainer}>
                <Text style={styles.question}>خانواده شما چه نوع رژیم غذایی دارد؟!</Text>
                <CheckBoxes
                  onUpdate={this._onUpdateRegimes}
                  regimes={regimes}
                />
            </View>
            <View style={styles.dotsContainer}>
              <Dots count={3} activeDot={0}/>
            </View>
            <View style={styles.buttonContainer}>
                <LandingButton title={'شروع کن'} onPress={this._onSubmit}/>
            </View>
        </LandingWrapper>
    );
  }
}
