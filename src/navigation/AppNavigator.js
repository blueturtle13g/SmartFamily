import {
  createAppContainer,
  createStackNavigator,
  createSwitchNavigator,
} from 'react-navigation';
import PhoneNumberScreen from '../screens/auth/phoneNumber/PhoneNumberScreen.react';
import ConfirmCodeScreen from '../screens/auth/confirmCode/ConfirmCodeScreen.react';
import PasswordScreen from '../screens/auth/password/PasswordScreen.react';
import FamilyMembersScreen from '../screens/auth/familyMembers/FamilyMembersScreen.react';

const AuthStack = createStackNavigator(
  {
    PhoneNumberScreen,
    ConfirmCodeScreen,
    PasswordScreen,
    FamilyMembersScreen,
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
