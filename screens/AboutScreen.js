import React, { useState, useEffect } from "react";
import {View, Text, StyleSheet, Switch} from 'react-native';

import {Avatar, Button, Card, Title, Paragraph} from 'react-native-paper';

import AsyncStorage from '@react-native-community/async-storage';

import {useSelector, useDispatch} from 'react-redux';

import {toggle_night} from '../src/redux/actions/nightActions';
import {Colors} from '../constants/Colors';


const AboutScreen = props => {
  const NightState = useSelector(state => state.night.isNight);
  const dispatch = useDispatch();

  const onAdToggle = currState => ToggleDay(currState);

const ToggleDay = item => {
    //let temp = !item;
    console.log('changing night: ' + item);
    storeData('hasAds', item)
      .then(() => {
        dispatch(toggle_night(item));
      })
      .catch(error => {
        console.warn('error saving night state');
        console.log(error);
      });
  };


  const storeData = async (name, value) => {
    let dataValue = JSON.stringify(value);
    console.log('value: ' + value);
    console.log('name: ' + name);
    try {
      await AsyncStorage.setItem(name, dataValue);
    } catch (error) {
      throw new Error(error.message);
    }
  };

  const toggleSwitch = () => onAdToggle(!NightState);

  return (
    <View style={[styles.container,{backgroundColor:Colors(NightState).background}]}>
      <Card style={[styles.card,{backgroundColor:Colors(NightState).background2}]} >
        <Card.Content>
          <Title style={{color:Colors(NightState).mainFontColor}}>About</Title>
          <Paragraph style={{color:Colors(NightState).mainFontColor}}>
            This is the unofficial UWL bus tracker app, as there isn't one
            provided by UWL. This was made by me and a friend for use by UWL
            students. If something doesn't seem right, you want more features
            added or you want to get involved, get in contact.
          </Paragraph>
        </Card.Content>
      </Card>

      <Card style={{marginTop: 10, backgroundColor:Colors(NightState).background2}}>
        <Card.Title title="Developers" titleStyle={{color:Colors(NightState).mainFontColor}} />
        <Card.Content>
        <Paragraph style={{color:Colors(NightState).mainFontColor}}>Rhys St Romaine</Paragraph>
        <Paragraph style={{color:Colors(NightState).mainFontColor}}>David Garrick - Bangbola</Paragraph>
        </Card.Content>
      </Card>
       <Card style={{marginTop: 10}} >
        <Card.Title title="Socials" />
        <Card.Content>
          <Paragraph>Privacy Policy</Paragraph>
          <Paragraph>Linked in</Paragraph>
          <Paragraph>Git Hub</Paragraph>
          
          <Switch
        onValueChange={toggleSwitch}
        value={NightState}
      />
        </Card.Content>

       
      </Card> 
    </View>
  );
};

const styles = StyleSheet.create({});

export default AboutScreen;
