import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';


import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';

import Dash from 'react-native-dash';

import ImageBackground from "./imageBackground";



export default function App() {

  return (
    <View style={styles.container}>

<ImageBackground/>
<ImageBackground/>
<ImageBackground/>

    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  icon:{
    backgroundColor:'transparent',
    marginLeft:-10,
    marginBottom: -40,
  },
  iconbottom:{
    backgroundColor:'transparent',
    marginLeft:-10,
    marginBottom: 0,
  },
  text:{
    color: '#000', 
    marginLeft:-20 ,
    marginBottom: -40,
  },
  textbottom:{
    color: '#000', 
    marginLeft:-20 ,
    marginBottom: 0,
  }
});
