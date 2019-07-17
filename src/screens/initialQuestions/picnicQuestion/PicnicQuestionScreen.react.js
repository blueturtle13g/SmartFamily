import React from 'react';
import {
  Text,
  View,
} from 'react-native';
import styles from './PicnicQuestionScreen.style';
import axios from 'axios';
import LandingWrapper from 'SmartFamily/src/components/landing/landingWrapper';
import LandingButton from 'SmartFamily/src/components/landing/landingButton';
import Dots from 'SmartFamily/src/components/questions/dots';
import QuestionInput from 'SmartFamily/src/components/questions/questionInput';
import { connect } from 'react-redux';

class PicnicQuestionScreen extends React.Component {
  state = {
    count: '',
  };

  _onSubmit = ()=>{
    this.props.navigation.navigate('RegimeQuestionScreen');
  }

  render() {
    const { keyboardOpen } = this.props;
    const { count } = this.state;
    return (
        <LandingWrapper
          keyboardOpen={keyboardOpen}
          onBackPress={()=>this.props.navigation.goBack()}
        >
            <View style={styles.questionContainer}>
              <Text style={styles.question}>چند مرتبه در هفته برنامه تفریحی دارید؟!</Text>
              {!keyboardOpen &&(
                <Text style={[styles.question, styles.description]}>تفریحاتی شامل شهربازی، سینما، تور و ...</Text>
              )}
              <QuestionInput
                value={count}
                placeholder={'چند مرتبه'}
                onChangeText={count=>this.setState({count})}
                keyboardType="decimal-pad"
              />
            </View>
            {!keyboardOpen &&(
              <View style={styles.dotsContainer}>
                <Dots count={3} activeDot={1}/>
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

export default connect(mapStateToProps)(PicnicQuestionScreen);
