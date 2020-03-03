import React from "react";

import { Platform } from "react-native";
import "react-native-gesture-handler";

import Colors from "../constants/Colors";
import BusSelectScreen from "../screens/BusSelectScreen";
import BusTrackerScreen from "../screens/BusTrackerScreen";
import AboutScreen from "../screens/AboutScreen";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

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
      <Tab.Navigator>
        <Tab.Screen name="Stops" component={Bus} />
        <Tab.Screen name="About" component={AboutScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

function Bus() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Bus Select" component={BusSelectScreen} />
      <Stack.Screen name="Bus Tracker" component={BusTrackerScreen} />
    </Stack.Navigator>
  );
}

export default App;
