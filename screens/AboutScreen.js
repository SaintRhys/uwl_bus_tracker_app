import React, { useState, useEffect } from "react";
import {View, Text, StyleSheet, Switch , ScrollView} from 'react-native';

import {Avatar, Button, Card, Title, Paragraph} from 'react-native-paper';

import AsyncStorage from '@react-native-community/async-storage';

import {useSelector, useDispatch} from 'react-redux';

import {toggle_night} from '../src/redux/actions/nightActions';
import {Colors} from '../constants/Colors';

import {useNetInfo} from '@react-native-community/netinfo';

const AboutScreen = props => {
  const NightState = useSelector(state => state.night.isNight);
  const dispatch = useDispatch();
  const netInfo = useNetInfo();

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


  const LeftContent = props => 
  <Switch
  onValueChange={toggleSwitch}
  value={NightState}
  style={{marginTop:50, marginRight:30}}
  //trackColor={NightState ? Colors(NightState).mainFontColor: Colors(NightState).mainFontColor }
  thumbColor={NightState ? Colors(NightState).primary : Colors(NightState).accent}
  ios_backgroundColor="#3e3e3e"
/>

  const toggleSwitch = () => onAdToggle(!NightState);

  return (

    
    <View style={[styles.container,{backgroundColor:Colors(NightState).background ,overflow:'hidden'}]}>
         <ScrollView  >
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

      <Card style={{ backgroundColor:Colors(NightState).background2}}>
        <Card.Title title="Developers" titleStyle={{color:Colors(NightState).mainFontColor}} />
        <Card.Content>
        <Paragraph style={{color:Colors(NightState).mainFontColor}}>Rhys St Romaine</Paragraph>
        <Paragraph style={{color:Colors(NightState).mainFontColor}}>David Garrick - Bangbola</Paragraph>
        </Card.Content>
      </Card>

{/*        <Card style={{marginTop: 10}} >
        <Card.Title title="Socials" />
        <Card.Content>
          <Paragraph>Privacy Policy</Paragraph>
          <Paragraph>Linked in</Paragraph>
          <Paragraph>Git Hub</Paragraph>
          
        </Card.Content>

       
      </Card>  */}


      <Card style={[styles.card,{backgroundColor:Colors(NightState).background2, marginTop: 10}]} >
    <Card.Title title="Enable Dark Mode" titleStyle={{ paddingRight:10, color:Colors(NightState).mainFontColor}}  right={LeftContent} />
    <Card.Content style={{ paddingRight:30 , marginTop:-20}}>
      <Paragraph  style={{color:Colors(NightState).mainFontColor}}>Choose between light and dark color paletts for the backgorunds, headers and text</Paragraph>
    </Card.Content>
  </Card>
  </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
 card:{
    marginBottom:10

 }
});

export default AboutScreen;
