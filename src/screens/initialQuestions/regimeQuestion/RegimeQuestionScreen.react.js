import React from 'react';
import { View } from 'react-native';
import styles from './RegimeQuestionScreen.style';
import axios from 'axios';
import LandingWrapper from 'SmartFamily/src/components/landingWrapper';
import MainButton from 'SmartFamily/src/components/buttons/main';
import Dots from '../components/dots';
import CheckBoxes from '../components/checkBoxes';
import IranSansText from 'SmartFamily/src/components/iranSansText';

export default class RegimeQuestionScreen extends React.Component {
  state = {
    regimes: [],
  };

  _onSubmit = ()=>{
    this.props.navigation.navigate('ProfileScreen', {
      modalVisible: true
    });
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
        <LandingWrapper
          onBackPress={()=>this.props.navigation.goBack()}
          image={'regime'}
        >
            <View style={styles.questionContainer}>
                <IranSansText style={styles.question}>خانواده شما چه نوع رژیم غذایی دارد؟!</IranSansText>
                <CheckBoxes
                  onUpdate={this._onUpdateRegimes}
                  regimes={regimes}
                />
            </View>
            <View style={styles.dotsContainer}>
              <Dots count={3} activeDot={0}/>
            </View>
            <View style={styles.buttonContainer}>
                <MainButton title={'شروع کن'} onPress={this._onSubmit}/>
            </View>
        </LandingWrapper>
    );
  }
}
