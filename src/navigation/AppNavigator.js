import {
  createAppContainer,
  createStackNavigator,
  createSwitchNavigator,
  createBottomTabNavigator,
} from 'react-navigation';

// auth stack
import PhoneNumberScreen from 'SmartFamily/src/screens/auth/phoneNumber/PhoneNumberScreen.react';
import ConfirmCodeScreen from 'SmartFamily/src/screens/auth/confirmCode/ConfirmCodeScreen.react';
import PasswordScreen from 'SmartFamily/src/screens/auth/password/PasswordScreen.react';
import LandingScreen from 'SmartFamily/src/screens/auth/landing/LandingScreen.react';
import RestaurantQuestionScreen from 'SmartFamily/src/screens/auth/initialQuestions/restaurantQuestion/RestaurantQuestionScreen.react';
import PicnicQuestionScreen from 'SmartFamily/src/screens/auth/initialQuestions/picnicQuestion/PicnicQuestionScreen.react';
import RegimeQuestionScreen from 'SmartFamily/src/screens/auth/initialQuestions/regimeQuestion/RegimeQuestionScreen.react';

import MainTabNavigator from './MainTabNavigator';

const AuthStack = createStackNavigator(
  {
    LandingScreen,
    PhoneNumberScreen,
    ConfirmCodeScreen,
    PasswordScreen,
    RestaurantQuestionScreen,
    PicnicQuestionScreen,
    RegimeQuestionScreen,
  },
  {
    headerMode: 'none',
  },
);

export default createAppContainer(
  createSwitchNavigator(
    {
      Main: MainTabNavigator,
      AuthStack,
    },
  ),
);
