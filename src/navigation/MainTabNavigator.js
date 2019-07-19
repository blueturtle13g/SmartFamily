import React from 'react';
import {
  createStackNavigator,
  createBottomTabNavigator,
} from 'react-navigation';
import ProfileScreen from 'SmartFamily/src/screens/profile/ProfileScreen.react';
import ReportsScreen from 'SmartFamily/src/screens/reports/ReportsScreen.react';
import ActivitiesScreen from 'SmartFamily/src/screens/activities/ActivitiesScreen.react';
import TabBar from 'SmartFamily/src/components/navigation/TabBar';
import Colors from 'SmartFamily/src/constants/Colors';
import { Image } from 'react-native';

const stackNavigationConfig = {
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: Colors.appColor,
      height: 80,
    },
    headerLeft:(<Image
      source={require('SmartFamily/assets/images/ad.png')}
      style={{
        width: 20,
        height: 25,
        resizeMode: 'contain',
        marginLeft: 24,
      }}
    />)
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