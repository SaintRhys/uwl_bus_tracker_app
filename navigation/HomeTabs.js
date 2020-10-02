// You can import Ionicons from @expo/vector-icons if you use Expo or
// react-native-vector-icons/Ionicons otherwise.
import * as React from 'react';
import {Text, View} from 'react-native';

import {Icon} from 'react-native-elements';

import Colors from '../constants/Colors';

import BusSelectScreen from '../screens/BusSelectScreen';
import AboutScreen from '../screens/AboutScreen';
import SettingsScreen from '../screens/SettingsScreen';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Bus Stops') {
            iconName = 'bus-clock';
          } else if (route.name === 'About') {
            iconName = 'information';
          } else if (route.name === 'Settings') {
            iconName = 'cogs';
          }

          // You can return any component that you like here!
          return (
            <Icon
              name={iconName}
              size={25}
              color={color}
              type="material-community"
            />
          );
        },
      })}
      tabBarOptions={{
        activeTintColor: Colors.primary,
        inactiveTintColor: Colors.accent,
      }}>
      <Tab.Screen name="Bus Stops" component={BusSelectScreen} />
      <Tab.Screen name="About" component={AboutScreen} />
      {/* <Tab.Screen name="Settings" component={SettingsScreen} /> */}
    </Tab.Navigator>
  );
}
