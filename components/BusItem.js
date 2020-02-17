import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Colors from "../constants/Colors";

const BusItem = props => {
  let date = new Date();
  let calcHours = (props.hours - date.getHours()) * 60;
  let calcMins = props.minutes - date.getMinutes();
  let mins = calcHours + calcMins;

  if (mins < 0) return null;

  return (
    <View style={styles.busItem}>
      <View style={styles.groupText}>
        <Text style={styles.smallText}>{props.title}</Text>
        <Text style={styles.timeStyle}>{props.time}</Text>
        <Text style={styles.smallText}>Scheduled: {props.time}</Text>
        <Text style={styles.smallText}>Towards -> paragon</Text>
      </View>
      <View style={styles.etaStyle}>
        <Text style={styles.minText}>{mins}</Text>
        <Text style={styles.minUnderText}>mins</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  busItem: {
    borderColor: Colors.primary,
    borderRadius: 10,
    borderWidth: 2,
    paddingHorizontal: 10,
    paddingBottom: 5,
    margin: 10,
    marginVertical: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: Colors.secondary,
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 8,
    elevation: 5
  },
  groupText: { flexDirection: "column" },
  timeStyle: {
    fontSize: 32,
    color: Colors.primary
  },
  minText: {
    fontSize: 25,
    color: Colors.primary
  },
  minUnderText: {
    fontSize: 12,
    color: Colors.mainFontColor
  },
  smallText: { fontSize: 14, color: Colors.mainFontColor },
  etaStyle: {
    alignItems: "center",
    borderRadius: 25,
    padding: 12,
    backgroundColor: Colors.secondary,
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 8,
    elevation: 5
  }
});

export default BusItem;
