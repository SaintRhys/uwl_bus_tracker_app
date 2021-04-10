import React from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";

import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';

import Dash from 'react-native-dash';

import LinearGradient from 'react-native-linear-gradient';

import constants from "../constants/Colors";



const LeftContentStart = props => <View style={{height:16, width:16 , borderColor: '#fff', borderRadius:20}} />
const LeftContentEnd = props => <View style={{height:16, width:16 , backgroundColor:'#fff',borderColor: '#fff', borderRadius:20}} />

const LeftContentStarticon = props =>  <Avatar.Icon size={49} icon="map-marker"  style={styles.icon} color='#fff'/>
const LeftContentEndicon = props =>  <Avatar.Icon size={49} icon="map-marker-radius" style={styles.iconbottom} color='#fff'/>

const image = { uri: "https://reactjs.org/logo-og.png" };

const App = () => (
  <View style={styles.container}>
    <ImageBackground source={require('../assets/images/SMRParagon1.jpeg')} style={styles.image} imageStyle={styles.img}  onPress={()=>console.log('test 1234')}>
    <LinearGradient
        // Background Linear Gradient
        colors={['transparent','rgba(0,0,0,0.5)']}
        style={{backgroundColor:'rgba(0,0,0,0.2)',width:'100%' , height:'100%'}}>
    <Card.Title title="St Mary's Road" subtitle="To Paragon"  titleStyle={{color:'#fff'}} subtitleStyle={{color:'#fff'}}  style={{bottom:0 , position:'absolute'}}/>
      </LinearGradient>
    </ImageBackground>

    <ImageBackground source={require('../assets/images/Broadway1.jpeg')} style={styles.image} imageStyle={styles.img}   onPress={()=>console.log('test 1234')} >
    <LinearGradient
    onPress={()=>console.log('test 1234')}
        // Background Linear Gradient
        colors={['transparent','rgba(0,0,0,0.5)']}
        style={{backgroundColor:'rgba(0,0,0,0.2)',width:'100%' , height:'100%'}}>
              <Card.Title title="Ealing Broadway" subtitle="To Paragon"  titleStyle={{color:'#fff'}} subtitleStyle={{color:'#fff'}}  style={{bottom:0 , position:'absolute'}} onPress={()=>console.log('test 1234')}/>
      </LinearGradient>
    </ImageBackground>
  </View>
);

    const styles = StyleSheet.create({
        container: {
          flex: 1,
        },
        image: {
          flex: 1,
          justifyContent: "center",
          overflow: 'hidden',
          borderRadius: 6,
          height:140,
          width:'100%',
          marginTop:10
        },
        img:{
          borderRadius: 6,
          width:'100%',
        },
        text: {
          color: "white",
          fontSize: 18,
          fontWeight: "bold",
          textAlign: "center",
        },
        textBottom: {
          color: "white",
          fontSize: 18,
          fontWeight: "bold",
          textAlign: "center",
        },
          icon:{
          backgroundColor:'transparent',
        },
        iconbottom:{
          backgroundColor:'transparent',
        },
        text:{
          flexDirection: 'row',
          alignItems: 'center',
          color: '#fff', 
        },
        text2:{
          flexDirection: 'column',
          alignItems: 'center',
          color: '#fff', 
        },
        textbottom:{
          color: '#fff', 
          marginLeft:-20 ,
        }
      });

export default App;