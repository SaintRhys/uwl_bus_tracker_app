import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Button,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
  ImageBackground,
  TouchableHighlight
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import { Card } from 'react-native-paper';

import {useSelector} from 'react-redux';


import {Colors} from '../constants/Colors';

const StopItem = props => {

  const NightState = useSelector(state => state.night.isNight);

  return (
  <Card style={styles.container} onPress={props.onViewBus}>
      <ImageBackground source={props.imageUrl} style={styles.image} imageStyle={styles.img} >
    <LinearGradient
        // Background Linear Gradient
        colors={['transparent','rgba(0,0,0,0.5)']}
        style={{backgroundColor:'rgba(0,0,0,0.2)',width:'100%' , height:'100%'}}
        onPress={props.onViewBus}
      >
    <Card.Title title={props.stopName} subtitle={"To "+props.direction}  titleStyle={{color:'#fff'}} subtitleStyle={{color:'#fff'}}  style={{bottom:0 , position:'absolute',  width:"100%"}}/>
      </LinearGradient>
    </ImageBackground>
    </Card >
     
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
    marginLeft:4,
    marginRight:4,
    elevation:0,
    backgroundColor:'transparent',
  },
  image: {
    height: '100%',
    width: '100%',
    borderTopRightRadius: 10,
    //borderRadius: 10
    backgroundColor: 'lightgrey',
  },
  imageContainer: {
    height: '60%',
    width: '100%',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    overflow: 'hidden',
  },

  stopInfo: {
    marginHorizontal: 10,
    marginVertical: 5,
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
});

export default StopItem;
