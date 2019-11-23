import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const BusItem = props => {
  let date = new Date();
  let calcHours = (props.hours - date.getHours()) * 60;
  let calcMins = props.minutes - date.getMinutes();
  let mins = calcHours + calcMins;

  return (
    <View style={styles.busItem}>
      <Text style={styles.timeStyle}>{props.time}</Text>
      <View style={styles.etaStyle}>
        <Text>{mins}</Text>
        <Text>mins</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  busItem: {
    borderColor: "black",
    borderWidth: 1,
    padding: 15,
    marginVertical: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    alignContent: "center",
    width: "100%"
  },
  timeStyle: {
    fontSize: 25
  },
  etaStyle: {
    alignItems: "center",
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 25,
    backgroundColor: "#ccc",
    padding: 12
  }
});

export default BusItem;
