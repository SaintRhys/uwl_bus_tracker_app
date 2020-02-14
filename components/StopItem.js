import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Button,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform
} from "react-native";

const StopItem = props => {
  let TouchableCmp =
    Platform.OS === "android" && Platform.Version >= 24
      ? TouchableNativeFeedback
      : TouchableOpacity;
  return (
    <View style={styles.container}>
      <TouchableCmp onPress={props.onViewBus}>
        <View>
          <View style={styles.imageContainer}>
            <Image style={styles.image} source={{ uri: props.imageUrl }} />
          </View>
          <View style={styles.stopInfo}>
            <Text style={styles.title}>{props.stopName}</Text>
            <Text>To -> {props.direction}</Text>
          </View>
        </View>
      </TouchableCmp>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 8,
    elevation: 5,
    borderRadius: 10,
    backgroundColor: "white",
    height: 150,
    margin: 10
  },
  image: {
    height: "100%",
    width: "100%",
    borderTopRightRadius: 10
    //borderRadius: 10
  },
  imageContainer: {
    height: "60%",
    width: "100%",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    overflow: "hidden"
  },
  title: { fontSize: 20, marginVertical: 2 },
  stopInfo: {
    marginHorizontal: 10,
    marginVertical: 5
  }
});

export default StopItem;
