// @flow

import type { NavigationScreenProp } from 'react-navigation';

import React from 'react';
import { Image, KeyboardAvoidingView, ScrollView, View } from 'react-native';
import LogInForm from './LogInForm.react';

import styles from '../Authentication.style';

type Props = { navigation: NavigationScreenProp<any> };

export default ({ navigation }: Props) => (
  <KeyboardAvoidingView style={styles.mainContainer} behavior="padding">
    <ScrollView keyboardShouldPersistTaps="always">
      <View style={styles.imageContainer}>
        <View style={styles.logoContainer}>
          <Image source={require('@assets/images/logo/logo.png')} />
        </View>
        <View style={styles.stickFigureImage}>
          <Image
            source={require('@assets/images/stick-figures/stickfigures.png')}
          />
        </View>
      </View>
      <LogInForm
        model={{
          email: '',
          password: '',
        }}
        navigation={navigation}
      />
    </ScrollView>
  </KeyboardAvoidingView>
);
