import React from 'react';
import {
  ActivityIndicator,
  Text,
  View,
  TextInput,
} from 'react-native';
import styles from './RestaurantQuestionScreen.style';
import axios from 'axios';
import LandingWrapper from 'SmartFamily/src/components/landing/landingWrapper';
import LandingButton from 'SmartFamily/src/components/landing/landingButton';
import Dots from 'SmartFamily/src/components/questions/dots';
import QuestionInput from 'SmartFamily/src/components/questions/questionInput';
import { connect } from 'react-redux';

class RestaurantQuestionScreen extends React.Component {
  state = {
    count: '',
  };

  _onSubmit = ()=>{
    this.props.navigation.navigate('PicnicQuestionScreen');
  }

  render() {
    const { keyboardOpen } = this.props;
    const { count } = this.state;
    return (
        <LandingWrapper keyboardOpen={keyboardOpen}>
            <View style={styles.questionContainer}>
                <Text style={styles.question}>چند مرتبه در هفته به رستوران می روید؟!</Text>
                <QuestionInput
                  value={count}
                  placeholder={'چند مرتبه'}
                  onChangeText={count=>this.setState({count})}
                  keyboardType="decimal-pad"
                />
            </View>
            {!keyboardOpen &&(
              <View style={styles.dotsContainer}>
                <Dots count={3} activeDot={2}/>
              </View>
            )}
            <View style={styles.buttonContainer}>
                <LandingButton title={'بعدی'} onPress={this._onSubmit}/>
            </View>
        </LandingWrapper>
    );
  }
}

const mapStateToProps = ({keyboardOpen})=>{
  return {keyboardOpen}
}

export default connect(mapStateToProps)(RestaurantQuestionScreen);
