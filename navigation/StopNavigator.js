import React from 'react';

import {Platform} from 'react-native';
import 'react-native-gesture-handler';

import Colors from '../constants/Colors';
import BusSelectScreen from '../screens/BusSelectScreen';
import BusTrackerScreen from '../screens/BusTrackerScreen';
import AboutScreen from '../screens/AboutScreen';
import Home from '../navigation/HomeTabs';
import NewsScreen from '../screens/newsScreen';


import TestScreen from '../screens/TestScreen';

import {NavigationContainer} from '@react-navigation/native';

import {createStackNavigator} from '@react-navigation/stack';

import { Icon } from 'react-native-elements'


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



const App  = ()=> {

  function RightTitle(navigation) {
    return (
    <Icon 
    iconStyle={{margin: 10}}
    name='bell-outline'
    type='material-community'
    size={30}
    color="#000"
    onPress={() =>  navigation.navigate('News') }
      />
    );
  }

  
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen name="Test" component={TestScreen} /> */}
        <Stack.Screen name="Home" component={Home} 
        options={({ navigation }) => ({
           headerStyle:{
             backgroundColor:'#fff'
           },
              headerTitle: '',
              headerLeft: () => (
                RightTitle(navigation)
                ),
         
           
            })} />
        <Stack.Screen name="BusSelect" component={BusSelectScreen} />
        <Stack.Screen name="News" component={NewsScreen} />
        <Stack.Screen name="BusTracker" component={BusTrackerScreen} />
        <Stack.Screen name="About" component={AboutScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
