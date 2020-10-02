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
} from 'react-native';

import Colors from '../constants/Colors';

const StopItem = props => {
  let TouchableCmp =
    Platform.OS === 'android' && Platform.Version >= 24
      ? TouchableNativeFeedback
      : TouchableOpacity;
  console.log(props.imageUrl);
  return (
    <View style={styles.container}>
      <TouchableCmp onPress={props.onViewBus}>
        <View>
          <View style={styles.imageContainer}>
            <Image style={styles.image} source={props.imageUrl} />
            {/* <Image
              style={styles.image}
              source={require('../assets/images/SMRParagon1.jpeg')}
            /> */}
          </View>
          <View style={styles.stopInfo}>
            <Text style={styles.title}>{props.stopName}</Text>
            <Text style={{color: Colors.mainFontColor}}>
              To -> {props.direction}
            </Text>
          </View>
        </View>
      </TouchableCmp>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    shadowColor: Colors.mainFontColor,
    shadowOpacity: 0.26,
    shadowOffset: {width: 0, height: 5},
    shadowRadius: 8,
    elevation: 5,
    borderRadius: 10,
    backgroundColor: Colors.secondary,
    height: 150,
    margin: 10,
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
  title: {fontSize: 20, marginVertical: 2, color: Colors.mainFontColor},
  stopInfo: {
    marginHorizontal: 10,
    marginVertical: 5,
  },
});

export default StopItem;
