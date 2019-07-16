// @flow

import type { NavigationScreenProp } from 'react-navigation';
import type { ValidationErrors } from '@utils/FormValidationSchema.utils';

import React from 'react';
import { View } from 'react-native';
import RalewayText from '@components/share/RalewayText';
import GradientButton from '@components/buttons/GradientButton.react';
import InputFieldCredential from '@components/input-field/InputFieldCredential.react';
import colors from '@constants/Colors';
import styles from '@screens/auth/Authentication.style';
import AlertPopup from '@components/alert/AlertPopup.react';
import FormStateManager from '@utils/FormStateManager.utils';
import FormValidationSchema from '@utils/FormValidationSchema.utils';
import compose from '@utils/compose';
import PlainButton from '@components/buttons/PlainButton.react';

type ForgotPasswordModel = { email: string };
type Props = {
  getErrorMessage: (name: string) => ?string,
  isValid: boolean,
  model: ForgotPasswordModel,
  navigation: NavigationScreenProp<any>,
  setProperty: (name: string, value: mixed) => void,
  setShouldShowErrorMessages: () => void,
  shouldShowErrorMessages: boolean,
  validationErrors: ValidationErrors,
};
type State = {
  success: boolean,
  visibleAlert: boolean,
};

class ForgotPasswordForm extends React.Component<Props, State> {
  state = {
    success: false,
    visibleAlert: false,
  };

  _onInputChange = (name: string, value: string) => {
    this.props.setProperty(name, value);
  };

  _onPressSendAsync = async (): Promise<void> => {
    const {
      model: { email },
      navigation: { navigate },
      setShouldShowErrorMessages,
      validationErrors,
    } = this.props;
    if (!validationErrors.isValid) {
      return setShouldShowErrorMessages();
    }
    try {
      //If successful, this.setState({success: true})
    } catch (e) {
      this.setState({ visibleAlert: true });
    }
  };

  _renderForm = () => (
    <View>
      <View>
        <InputFieldCredential
          autoCapitalize="none"
          errorMessage={this.props.getErrorMessage('email')}
          keyboardType="email-address"
          name="email"
          onChange={this._onInputChange}
          placeholder="enter your email address"
          title="WE WILL SEND YOU A LINK TO RESET YOUR PASSWORD"
        />
      </View>
      <View style={styles.gradientButtonContainer}>
        <GradientButton
          colors={[colors.red1, colors.red1, colors.red1]}
          onPress={this._onPressSendAsync}
          style="mediumGradient"
          title="SEND"
        />
        <PlainButton
          onPress={() => {
            this.props.navigation.navigate('Landing');
          }}
          style="mediumUnderlinedGrey"
          title="CANCEL"
        />
      </View>
      <AlertPopup
        isVisible={this.state.visibleAlert}
        leftToRightTransition={true}
        text="Something went wrong!"
        isError={true}
        buttonTitle="Close"
        onPress={() => this.setState({ visibleAlert: false })}
      />
    </View>
  );

  _renderSuccessMessage = () => (
    <View>
      <RalewayText style={styles.successText}>
        RESET LINK SENT! PLEASE CHECK YOUR EMAIL.
      </RalewayText>
      <View style={styles.gradientButtonContainer}>
        <GradientButton
          colors={[colors.red1, colors.red1, colors.red1]}
          onPress={() => {
            this.props.navigation.navigate('Landing');
          }}
          style="mediumGradient"
          title="GO BACK"
        />
      </View>
    </View>
  );

  render() {
    const { success } = this.state;
    return success ? this._renderSuccessMessage() : this._renderForm();
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
  }),
)(ForgotPasswordForm);
