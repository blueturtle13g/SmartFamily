import React from 'react';
import {
  createStackNavigator,
  createBottomTabNavigator,
} from 'react-navigation';
import ProfileScreen from 'SmartFamily/src/screens/profile/ProfileScreen.react';
import ReportsScreen from 'SmartFamily/src/screens/reports/ReportsScreen.react';
import ActivitiesScreen from 'SmartFamily/src/screens/activities/ActivitiesScreen.react';
import TabBar from 'SmartFamily/src/components/navigation/TabBar';

const stackNavigationConfig =   {
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: '#27A6B5',
      height: 80,
    }
  },
};

const ProfileStack = createStackNavigator(
  {ProfileScreen},
  stackNavigationConfig
);

const ActivitiesStack = createStackNavigator(
  {ActivitiesScreen},
  stackNavigationConfig
);

const ReportsStack = createStackNavigator(
  {ReportsScreen},
  stackNavigationConfig
);

export default createBottomTabNavigator(
  {
    ProfileStack,
    ActivitiesStack,
    ReportsStack,
  },
  {
    tabBarComponent: props =><TabBar {...props}/>,
  },
);