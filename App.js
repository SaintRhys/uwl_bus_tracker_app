import React from "react";
import { StyleSheet, Text, View } from "react-native";

import StopNavigator from "./navigation/StopNavigator";

export default function App() {
  return <StopNavigator />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
