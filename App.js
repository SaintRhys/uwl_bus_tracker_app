import React, {useEffect} from 'react';
import {Button, View, Text, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import StopNavigator from './navigation/StopNavigator';

import AsyncStorage from '@react-native-community/async-storage';

import {toggle_night} from './src/redux/actions/nightActions';

import {useDispatch} from 'react-redux';
import SplashScreen from 'react-native-splash-screen';


const App = () => {
  const dispatch = useDispatch();
  const onToggleAds = currState => dispatch(toggle_night(currState));

  async function getData() {
    let adState = await AsyncStorage.getItem('hasAds');
    if (adState !== null) {
      console.log(adState);
        adState = JSON.parse(adState);
        onToggleAds(adState);
    }
    //SplashScreen.hide();
  }

  useEffect(() => {
    //   console.log('App.js has rerendered');
    getData();
    SplashScreen.hide();
  }, []);

  return <StopNavigator />;
};


export default App;

