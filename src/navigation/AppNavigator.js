import {
  createAppContainer,
  createStackNavigator,
  createSwitchNavigator,
} from 'react-navigation';
import LandingScreen from '@screens/auth/landing/LandingScreen.react';

const AuthStack = createStackNavigator(
  {
    Landing: LandingScreen,
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
