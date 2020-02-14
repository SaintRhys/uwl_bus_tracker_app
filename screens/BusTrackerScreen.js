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
import Colors from "../constants/Colors";

class BusTrackerScreen extends React.Component {
  title = "";
  constructor(props) {
    super(props);
    this.state = { isLoading: true, dataSource: null, isRefreshing: false };
    title = props.navigation.getParam("title");
  }
  async componentDidMount() {
    //http://uwlshuttle.utrack.com/api/eta/stops/55?callback.json
    this.fetchBusData();
  }

  async fetchBusData() {
    this.setState({ isRefreshing: true });
    const { state } = this.props.navigation;
    try {
      const response = await fetch(
        "http://uwlshuttle.utrack.com/api/eta/stops/" +
          state.params.busId +
          "?callback.json"
      );
      const responseJson = await response.json();
      this.setState({
        isLoading: false,
        dataSource: responseJson,
        isRefreshing: false
      });
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
    if (this.state.dataSource.services.length === 0) {
      return (
        <View style={styles.noBusContainer}>
          <Text style={styles.noBusText}>NO BUSES DUE</Text>
        </View>
      );
    }
    console.log(this.state.dataSource);
    return (
      <FlatList
        data={this.state.dataSource.services}
        style={{ backgroundColor: Colors.background }}
        onRefresh={() => this.fetchBusData()}
        refreshing={this.state.isRefreshing}
        renderItem={({ item }) => (
          <BusItem
            time={item.time.arrive.time}
            hours={item.time.arrive.hrs}
            minutes={item.time.arrive.mins}
            title={title}
          />
        )}
        keyExtractor={item => item.journeyId}
        contentContainerStyle={styles.list}
      />
    );
  }
}

BusTrackerScreen.navigationOptions = navData => {
  return { headerTitle: navData.navigation.getParam("title") };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 20,
    //alignItems: "center",
    //justifyContent: "center",
    backgroundColor: Colors.background
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
    // flexGrow: 1
    flex: 1
    //width: "100%",
    //justifyContent: "center"
    //alignItems: "center"
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
