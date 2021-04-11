// You can import Ionicons from @expo/vector-icons if you use Expo or
// react-native-vector-icons/Ionicons otherwise.
import * as React from 'react';
import {Text, View} from 'react-native';

import {Icon} from 'react-native-elements';


import BusSelectScreen from '../screens/BusSelectScreen';
import AboutScreen from '../screens/AboutScreen';
import SettingsScreen from '../screens/SettingsScreen';
//import Playground from '../screens/playground';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Colors} from '../constants/Colors';
import {useSelector} from 'react-redux';



function App() {

const NightState = useSelector(state => state.night.isNight);
const Tab = createBottomTabNavigator();


  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Bus Stops') {
            iconName = 'bus';
          } else if (route.name === 'About') {
            iconName = 'information';
          } else if (route.name === 'Settings') {
            iconName = 'cogs';
          } else if (route.name === 'Test') {
          iconName = 'bus-clock';
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
        activeTintColor: Colors(NightState).primary,
       // inactiveTintColor: Colors(NightState).tabber,
        style: {
          backgroundColor: Colors(NightState).background
          },
       
      }}>
      <Tab.Screen name="Bus Stops" component={BusSelectScreen} />
      <Tab.Screen name="About" component={AboutScreen} />
      {/* <Tab.Screen name="Test" component={Playground} /> */}
      {/* <Tab.Screen name="Settings" component={SettingsScreen} /> */}
    </Tab.Navigator>
  );
}

export default App;