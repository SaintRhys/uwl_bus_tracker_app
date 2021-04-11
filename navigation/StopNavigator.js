import React from 'react';

import {Platform} from 'react-native';
import 'react-native-gesture-handler';

//import Colors from '../constants/Colors';
import BusSelectScreen from '../screens/BusSelectScreen';
import BusTrackerScreen from '../screens/BusTrackerScreen';
import AboutScreen from '../screens/AboutScreen';
import Home from '../navigation/HomeTabs';
import NewsScreen from '../screens/newsScreen';


import { StatusBar  } from 'react-native';


import TestScreen from '../screens/TestScreen';

import {NavigationContainer} from '@react-navigation/native';

import {createStackNavigator} from '@react-navigation/stack';

import { Icon } from 'react-native-elements'

import {Colors} from '../constants/Colors';
import {useSelector} from 'react-redux';

const Stack = createStackNavigator();

const App  = ()=> {

  const NightState = useSelector(state => state.night.isNight);

  function RightTitle(navigation) {
    return (
    <Icon 
    iconStyle={{margin: 10}}
    name='bell-outline'
    type='material-community'
    size={30}
    color={Colors(NightState).mainIcon}
    onPress={() =>  navigation.navigate('News') }
      />
    );
  }

  
  return (
    <NavigationContainer>

<StatusBar
            barStyle={NightState ? "light-content":"dark-content"}
            backgroundColor={Colors(NightState).background}
          />
      <Stack.Navigator>
        {/* <Stack.Screen name="Test" component={TestScreen} /> */}
        <Stack.Screen name="Home" component={Home} 
        options={({ navigation }) => ({
           headerStyle:{
             backgroundColor:Colors(NightState).background
           },
              headerTitle: '',
              headerLeft: () => (
                RightTitle(navigation)
                ),
         
           
            })} />
        <Stack.Screen name="BusSelect" component={BusSelectScreen} />
        <Stack.Screen name="News" component={NewsScreen}
        options={({ navigation }) => ({
           headerStyle:{
             backgroundColor:Colors(NightState).background,
           },
           headerTitleStyle: {
            color:Colors(NightState).mainFontColor,
          },
          headerTintColor:Colors(NightState).mainFontColor
            })} />
        <Stack.Screen name="BusTracker" component={BusTrackerScreen}   options={({ navigation }) => ({
           headerStyle:{
             backgroundColor:Colors(NightState).background,
           },
           headerTitleStyle: {
            color:Colors(NightState).mainFontColor,
          },
          headerTintColor:Colors(NightState).mainFontColor
            })} />
        <Stack.Screen name="About" component={AboutScreen}   options={({ navigation }) => ({
           headerStyle:{
             backgroundColor:Colors(NightState).background,
           },
           headerTitleStyle: {
            color:Colors(NightState).mainFontColor,
          },
          headerTintColor:Colors(NightState).mainFontColor
            })} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
