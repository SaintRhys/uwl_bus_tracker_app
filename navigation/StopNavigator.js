import React from 'react';

import {Platform} from 'react-native';
import 'react-native-gesture-handler';

import Colors from '../constants/Colors';
import BusSelectScreen from '../screens/BusSelectScreen';
import BusTrackerScreen from '../screens/BusTrackerScreen';
import AboutScreen from '../screens/AboutScreen';
import Home from '../navigation/HomeTabs';

import {NavigationContainer} from '@react-navigation/native';

import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

// const StopNavigator = createStackNavigator(
//   {
//     BusSelect: BusSelectScreen,
//     BusTracker: BusTrackerScreen,
//     About: AboutScreen,
//   },
//   {
//     defaultNavigationOptions: {
//       headerStyle: {
//         backgroundColor:
//           Platform.OS === 'android' ? Colors.primary : Colors.secondary,
//       },
//       headerTitleStyle: {
//         fontFamily: 'System',
//       },
//       headerBackTitleStyle: {fontFamily: 'System'},
//       headerTintColor:
//         Platform.OS === 'android' ? Colors.secondary : Colors.primary,
//     },
//   },
// );

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="BusSelect" component={BusSelectScreen} />
        <Stack.Screen name="BusTracker" component={BusTrackerScreen} />
        <Stack.Screen name="About" component={AboutScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
