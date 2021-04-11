import * as React from 'react';
import { Text, View, StyleSheet, ScrollView, Linking  } from 'react-native';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';

import {Colors} from '../constants/Colors';
import {useSelector} from 'react-redux';


export default function App() {

  const NightState = useSelector(state => state.night.isNight);

  return (
    <View style={[styles.container,{backgroundColor:Colors(NightState).background}]}>
      <ScrollView style={styles.scrollView}>

 <Card style={[styles.card,{backgroundColor:Colors(NightState).background2}]} onPress={()=>Linking.openURL("https://play.google.com/store/apps/details?id=com.rhyscocktails&hl=en")}>
    <Card.Title title="Bay6 Cocktails" subtitle="10/04/2021" 
     subtitleStyle={{color:Colors(NightState).mainFontColor}}
     titleStyle={{color:Colors(NightState).mainFontColor}} 
     />
    <Card.Content>
    <Title style={{color: Colors(NightState).mainFontColor}}>Newly released</Title>
      <Paragraph style={{color: Colors(NightState).mainFontColor}}>Create Your Own - If our huge list of cocktails doesn't contain the one you want or just fancy experimenting, then can create and save your own at any time, select from our list of ingredients and garnishes and write some instructions in for your future self!</Paragraph>
    </Card.Content>
  </Card>

{/*   <Card style={styles.card}>
    <Card.Title title="Update 1.04" subtitle="10/04/2021" subtitleStyle={{color:Colors.primary}} />
    <Card.Content>
    <Title>News</Title>
      <Paragraph>Create Your Own - If our huge list of cocktails doesn't contain the one you want or just fancy experimenting, then can create and save your own at any time, select from our list of ingredients and garnishes and write some instructions in for your future self!</Paragraph>
    </Card.Content>
  </Card>
 */}
{/*   <Card style={styles.card}>
    <Card.Title title="MyValitudo" subtitle="Newly released" subtitleStyle={{color:Colors.primary}} />
    <Card.Content>
      <Paragraph>Data will always be available – so reduces time in obtaining or passing data between health professionals, organizations and carers.</Paragraph>
    </Card.Content>
  </Card> */}
   </ScrollView>
    </View>
  );
}

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
    margin:10

 }
});
