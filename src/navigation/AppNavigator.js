import {
  createAppContainer,
  createStackNavigator,
  createSwitchNavigator,
} from 'react-navigation';
import PhoneNumberScreen from '../screens/auth/phoneNumber/PhoneNumberScreen.react';
import ConfirmCodeScreen from '../screens/auth/confirmCode/ConfirmCodeScreen.react';
import PasswordScreen from '../screens/auth/password/PasswordScreen.react';
import FamilyMembersScreen from '../screens/auth/familyMembers/FamilyMembersScreen.react';
import MemberFormScreen from '../screens/auth/memberForm/MemberFormScreen.react';
import WelcomeScreen from '../screens/auth/welcome/WelcomeScreen.react';
import LandingScreen from '../screens/auth/landing/LandingScreen.react';
import RestaurantQuestionScreen from '../screens/initialQuestions/restaurantQuestion/RestaurantQuestionScreen.react';
import PicnicQuestionScreen from '../screens/initialQuestions/picnicQuestion/PicnicQuestionScreen.react';
import RegimeQuestionScreen from '../screens/initialQuestions/regimeQuestion/RegimeQuestionScreen.react';

const AuthStack = createStackNavigator(
  {
    LandingScreen,
    PhoneNumberScreen,
    ConfirmCodeScreen,
    PasswordScreen,
    RestaurantQuestionScreen,
    PicnicQuestionScreen,
    RegimeQuestionScreen,
    // FamilyMembersScreen,
    // MemberFormScreen,
    // WelcomeScreen,
  },
  {
    headerMode: 'none',
  },
);

export default createAppContainer(
  createSwitchNavigator(
    {
      Auth: AuthStack,
    },
  ),
);
