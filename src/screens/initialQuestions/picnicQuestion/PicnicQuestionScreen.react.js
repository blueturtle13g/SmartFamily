import React from 'react';
import { View } from 'react-native';
import styles from './PicnicQuestionScreen.style';
import axios from 'axios';
import LandingWrapper from 'SmartFamily/src/components/landingWrapper';
import MainButton from 'SmartFamily/src/components/buttons/main';
import Dots from '../components/dots';
import QuestionInput from '../components/questionInput';
import { connect } from 'react-redux';
import IranSansText from 'SmartFamily/src/components/iranSansText';

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
          image={'picnic'}
        >
            <View style={styles.questionContainer}>
              <IranSansText style={styles.question}>چند مرتبه در هفته برنامه تفریحی دارید؟!</IranSansText>
              {!keyboardOpen &&(
                <IranSansText style={[styles.question, styles.description]}>تفریحاتی شامل شهربازی، سینما، تور و ...</IranSansText>
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
                <MainButton title={'بعدی'} onPress={this._onSubmit}/>
            </View>
        </LandingWrapper>
    );
  }
}

const mapStateToProps = ({keyboardOpen})=>{
  return {keyboardOpen}
}

export default connect(mapStateToProps)(PicnicQuestionScreen);
