// @flow
import type { NavigationScreenProp } from 'react-navigation';
import type { ValidationErrors } from '@utils/FormValidationSchema.utils';

import AlertPopup from '@components/alert/AlertPopup.react';
import PlainButton from '@components/buttons/PlainButton.react';
import React from 'react';
import { AsyncStorage, View } from 'react-native';
import GradientButton from '@components/buttons/GradientButton.react';
import InputFieldCredential from '@components/input-field/InputFieldCredential.react';
import axios from 'axios';
import colors from '@constants/Colors';
import styles from '@screens/auth/Authentication.style';
import utility from '@constants/Utility';
import FacebookLogIn from '@components/facebook/FacebookLogIn.react';
import FormStateManager from '@utils/FormStateManager.utils';
import FormValidationSchema from '@utils/FormValidationSchema.utils';
import compose from '@utils/compose';
import imageUtils from '@utils/Image.utils';

type LoginModel = { email: string, password: string };
type Props = {
  getErrorMessage: (name: string) => ?string,
  isValid: boolean,
  model: LoginModel,
  navigation: NavigationScreenProp<any>,
  setProperty: (name: string, value: mixed) => void,
  setShouldShowErrorMessages: () => void,
  shouldShowErrorMessages: boolean,
  validationErrors: ValidationErrors,
};
type State = {
  errorMessage: string,
};

class LogInForm extends React.Component<Props, State> {
  state = {
    errorMessage: '',
  };
  _onInputChange = (name: string, value: string) => {
    this.props.setProperty(name, value);
  };

  _onPressLogInAsync = async (): Promise<void> => {
    const {
      model: { email, password },
      navigation: { navigate },
      setShouldShowErrorMessages,
      validationErrors,
    } = this.props;
    // if form is not valid, do not submit the data and show the alertText messages
    if (!validationErrors.isValid) {
      return setShouldShowErrorMessages();
    }
    try {
      const response = await axios.post(
        `${utility.apiBaseUrl}auth/login`,
        {
          email,
          password,
        },
        {
          validateStatus: status => status >= 200 && status < 500,
        },
      );
      if (response.status === 404) {
        return this.setState({ errorMessage: 'User was not found' });
      }
      const { jwtAccessToken, message, success, user } = response.data;
      if (success) {
        await AsyncStorage.setItem('jwtAccessToken', jwtAccessToken);
        await AsyncStorage.setItem('userId', user.id);
        if (user.hasCompletedRegistration) {
          navigate('Main');
        } else {
          navigate('Preferences', {
            email: user.email,
            images: imageUtils.getProfileImageUrls(user.pictures, 'sm'),
          });
        }
      } else {
        this.setState({ errorMessage: message });
      }
    } catch (e) {
      this.setState({ errorMessage: e.message });
    }
  };

  render() {
    const { errorMessage } = this.state;
    const {
      getErrorMessage,
      navigation,
      navigation: { navigate },
    } = this.props;
    return (
      <View>
        <View>
          <InputFieldCredential
            autoCapitalize="none"
            errorMessage={getErrorMessage('email')}
            keyboardType="email-address"
            name="email"
            onChange={this._onInputChange}
            placeholder="enter your email address"
            title="EMAIL"
          />
          <InputFieldCredential
            errorMessage={getErrorMessage('password')}
            onChange={this._onInputChange}
            placeholder="enter your password"
            title="PASSWORD"
            name="password"
            password={true}
            onSubmitEditing={this._onPressLogInAsync}
          />
        </View>
        <View style={styles.forgotPasswordContainer}>
          <PlainButton
            onPress={() => {
              navigate('ForgotPassword');
            }}
            style={'smallUnderlinedGrey'}
            title="Forgot Password?"
          />
        </View>
        <View style={styles.gradientButtonContainer}>
          <GradientButton
            colors={[colors.red1, colors.red1, colors.red1]}
            onPress={this._onPressLogInAsync}
            style="mediumGradient"
            title="LOG IN"
          />
        </View>
        <View style={styles.facebookButtonContainer}>
          <FacebookLogIn navigation={navigation} title="LOG IN WITH FACEBOOK" />
        </View>
        <AlertPopup
          isVisible={!!errorMessage}
          leftToRightTransition={true}
          text={errorMessage}
          isError={true}
          buttonTitle="Close"
          onPress={() => this.setState({ errorMessage: '' })}
        />
      </View>
    );
  }
}

export default compose(
  FormStateManager(),
  FormValidationSchema({
    email: {
      rules: {
        required: {},
        isValidEmail: {},
      },
    },
    password: {
      rules: {
        required: {},
      },
    },
  }),
)(LogInForm);
