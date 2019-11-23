import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import STOPINFO from "../data/bus-data";
import StopItem from "../components/StopItem";

const BusSelectScreen = props => {
  return (
    <FlatList
      data={STOPINFO}
      keyExtractor={stop => stop.id}
      renderItem={stopData => (
        <StopItem
          stopName={stopData.item.title}
          imageUrl={stopData.item.imageUrl}
          direction={stopData.item.direction}
          onViewBus={() => {
            props.navigation.navigate("BusTracker", {
              busId: stopData.item.id
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
