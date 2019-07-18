import React from 'react';
import {
  createStackNavigator,
  createBottomTabNavigator,
} from 'react-navigation';
import ProfileScreen from 'SmartFamily/src/screens/profile/ProfileScreen.react';
import TabBar from 'SmartFamily/src/components/navigation/TabBar';

const ProfileStack = createStackNavigator(
  {
    ProfileScreen
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#27A6B5',
        height: 80,
      }
    },
  }
);

export default createBottomTabNavigator(
  {
    ProfileStack,
  },
  {
    tabBarComponent: props =><TabBar {...props}/>,
  },
);