// @flow

import type { NavigationScreenProp } from 'react-navigation';

import React from 'react';
import { Image, KeyboardAvoidingView, View } from 'react-native';
import DismissKeyboardView from '@utils/Keyboard.utils';
import styles from '@screens/auth/Authentication.style';
import ForgotPasswordForm from './ForgotPasswordForm.react';

type Props = { navigation: NavigationScreenProp<any> };

export default ({ navigation }: Props) => (
  <KeyboardAvoidingView style={styles.mainContainer}>
    <DismissKeyboardView>
      <View>
        <View style={styles.logoContainer}>
          <Image source={require('@assets/images/logo/logo.png')} />
        </View>
        <View style={styles.imageContainer}>
          <Image
            source={require('@assets/images/stick-figures/stickfigures.png')}
          />
        </View>
        <ForgotPasswordForm model={{ email: '' }} navigation={navigation} />
      </View>
    </DismissKeyboardView>
  </KeyboardAvoidingView>
);
