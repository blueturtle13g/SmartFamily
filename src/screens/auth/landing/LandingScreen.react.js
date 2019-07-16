// @flow

import type { NavigationScreenProp } from 'react-navigation';

import React from 'react';
import {
  AsyncStorage,
  Image,
  View,
  UIManager,
  LayoutAnimation,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import { Video } from 'expo-av';
import styles from './LandingScreen.style';
import GradientButton from '@components/buttons/GradientButton.react';
import colors from '@constants/Colors';
import FacebookLogIn from '@components/facebook/FacebookLogIn.react';
import Layout from '@constants/Layout';
import axios from 'axios';
import utility from '@constants/Utility';
import imageUtils from '@utils/Image.utils';
import RalewayText from '@components/share/RalewayText';

type State = {
  destinationScreen: ?string,
  email: ?string,
  images: ?Array<string>,
  loading: boolean,
  userVerificationFinished: boolean,
  videoFinished: boolean,
};
type Props = { navigation: NavigationScreenProp<any> };
const VIDEO_DURATION = 9000;
const LOGIN_BUTTON_DELAY = 300;
const SIGNUP_BUTTON_DELAY = 500;

export default class LandingScreen extends React.Component<Props, State> {
  state = {
    destinationScreen: null,
    email: null,
    images: null,
    loading: false,
    userVerificationFinished: false,
    videoFinished: this.props.navigation.state.params
      ? this.props.navigation.state.params.skipVideo
      : false,
  };

  componentDidMount() {
    this._bootstrapAsync();
  }

  componentWillUpdate() {
    UIManager.setLayoutAnimationEnabledExperimental &&
      UIManager.setLayoutAnimationEnabledExperimental(true);
    LayoutAnimation.easeInEaseOut();
  }

  _bootstrapAsync = async (): ?Promise<void> => {
    try {
      const jwtAccessToken = await AsyncStorage.getItem('jwtAccessToken');
      if (!jwtAccessToken) {
        this.setState({ userVerificationFinished: true });
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
        user: { hasCompletedRegistration, email, pictures },
      } = response.data;

      if (!success) {
        this.setState({ userVerificationFinished: true });
        return;
      }

      if (hasCompletedRegistration) {
        this.setState({
          destinationScreen: 'Main',
          userVerificationFinished: true,
        });
        return;
      }

      this.setState({
        destinationScreen: 'Preferences',
        email,
        images: imageUtils.getProfileImageUrls(pictures, 'sm'),
        userVerificationFinished: true,
      });
    } catch (e) {
      this.setState({ userVerificationFinished: true });
    }
  };

  _checkUserCondition = (): void => {
    this.setState({ loading: true, videoFinished: true });
    const { destinationScreen, email, images } = this.state;
    if (destinationScreen) {
      this.props.navigation.navigate(destinationScreen, { email, images });
    } else {
      this.setState({ loading: false });
    }
  };

  _onPlaybackStatusUpdate = ({ positionMillis }: Object): void => {
    if (positionMillis < VIDEO_DURATION || !positionMillis) {
      return;
    }
    this._checkUserCondition();
  };

  render() {
    const {
      navigation,
      navigation: { navigate },
    } = this.props;
    const { loading, userVerificationFinished, videoFinished } = this.state;
    return (
      <View style={styles.mainContainer}>
        <Video
          source={require('@assets/videos/launch_video.mp4')}
          resizeMode="cover"
          onPlaybackStatusUpdate={this._onPlaybackStatusUpdate}
          shouldPlay
          style={[
            styles.video,
            videoFinished && { marginTop: -Layout.window.height },
          ]}
        />

        {!videoFinished && userVerificationFinished && (
          <RalewayText
            fontWeight="Bold"
            style={styles.skip}
            onPress={this._checkUserCondition}
          >
            Skip
          </RalewayText>
        )}

        {!loading && videoFinished && (
          <View
            style={[styles.menuContainer, videoFinished && { marginBottom: 0 }]}
          >
            <View style={styles.imagesContainer}>
              <Image source={require('@assets/images/logo/logo.png')} />
              <Image
                style={styles.stickFigureImage}
                source={require('@assets/images/stick-figures/stickfigures.png')}
              />
            </View>
            <View style={styles.gradientButtonContainer}>
              {videoFinished && (
                <Animatable.View animation="zoomIn" delay={LOGIN_BUTTON_DELAY}>
                  <GradientButton
                    colors={[colors.red1, colors.red1, colors.red1]}
                    onPress={() => {
                      navigate('LogIn');
                    }}
                    style="largeGradient"
                    title="LOG INTO YOUR ACCOUNT"
                  />
                </Animatable.View>
              )}
              {videoFinished && (
                <Animatable.View animation="zoomIn" delay={SIGNUP_BUTTON_DELAY}>
                  <GradientButton
                    colors={[colors.red1, colors.red1, colors.red1]}
                    onPress={() => {
                      navigate('SignUp');
                    }}
                    style="largeGradient"
                    title="CREATE A NEW ACCOUNT"
                  />
                </Animatable.View>
              )}
            </View>
            <View style={styles.facebookButtonContainer}>
              <FacebookLogIn
                navigation={navigation}
                title="SIGN UP WITH FACEBOOK"
              />
            </View>
          </View>
        )}
      </View>
    );
  }
}
