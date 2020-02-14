import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import STOPINFO from "../data/bus-data";
import StopItem from "../components/StopItem";

import Colors from "../constants/Colors";

const BusSelectScreen = props => {
  console.log(STOPINFO[0].id);
  return (
    <FlatList
      data={STOPINFO}
      keyExtractor={stop => stop.id}
      style={{ backgroundColor: Colors.background }}
      renderItem={stopData => (
        <StopItem
          stopName={stopData.item.title}
          imageUrl={stopData.item.imageUrl}
          direction={stopData.item.direction}
          onViewBus={() => {
            props.navigation.push("BusTracker", {
              busId: stopData.item.id,
              title: stopData.item.title
            });
          }}
        />
      )}
    />
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});

BusSelectScreen.navigationOptions = {
  headerTitle: "UWL BUS TRACKER"
};

export default BusSelectScreen;
