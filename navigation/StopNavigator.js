import { Platform } from "react-native";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Colors from "../constants/Colors";
import BusSelectScreen from "../screens/BusSelectScreen";
import BusTrackerScreen from "../screens/BusTrackerScreen";

const StopNavigator = createStackNavigator(
  {
    BusSelect: BusSelectScreen,
    BusTracker: BusTrackerScreen
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Platform.OS === "android" ? Colors.primary : "white"
      },
      headerTitleStyle: {
        fontFamily: "System"
      },
      headerBackTitleStyle: { fontFamily: "System" },
      headerTintColor: Platform.OS === "android" ? "white" : Colors.primary
    }
  }
);

export default createAppContainer(StopNavigator);
