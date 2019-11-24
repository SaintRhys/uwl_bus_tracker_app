import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  FlatList,
  ScrollView
} from "react-native";
import BusItem from "../components/BusItem";

class BusTrackerScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isLoading: true, dataSource: null };
  }
  async componentDidMount() {
    //http://uwlshuttle.utrack.com/api/eta/stops/55?callback.json
    const { state } = this.props.navigation;
    try {
      const response = await fetch(
        "http://uwlshuttle.utrack.com/api/eta/stops/" +
          state.params.busId +
          "?callback.json"
      );
      const responseJson = await response.json();
      this.setState({ isLoading: false, dataSource: responseJson.services });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View style={styles.screen}>
          <ActivityIndicator />
        </View>
      );
    }
    if (this.state.dataSource.length === 0) {
      return (
        <View style={styles.noBusContainer}>
          <Text style={styles.noBusText}>NO BUSES DUE</Text>
        </View>
      );
    }
    return (
      <View style={styles.screen}>
        <Text>Bus Tracker</Text>
        <View style={styles.listContainerBig}>
          <FlatList
            data={this.state.dataSource}
            renderItem={({ item }) => (
              <BusItem
                time={item.time.arrive.time}
                hours={item.time.arrive.hrs}
                minutes={item.time.arrive.mins}
              />
            )}
            keyExtractor={item => item.journeyId}
            contentContainerStyle={styles.list}
          />
        </View>
      </View>
    );
  }
}

BusTrackerScreen.navigationOptions = navData => {
  return { headerTitle: navData.navigation.getParam("title") };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center"
  },
  listContainer: {
    flex: 1,
    width: "60%"
  },
  listContainerBig: {
    flex: 1,
    width: "80%"
  },
  listItem: {
    borderColor: "#ccc",
    borderWidth: 1,
    padding: 15,
    marginVertical: 10,
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%"
  },
  list: {
    flexGrow: 1
  },
  noBusContainer: {
    justifyContent: "center",
    alignItems: "center",
    padding: 20
  },
  noBusText: {
    fontFamily: "open-sans",
    fontSize: 25
  }
});

export default BusTrackerScreen;
