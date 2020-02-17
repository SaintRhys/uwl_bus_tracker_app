import { Platform } from "react-native";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Colors from "../constants/Colors";
import BusSelectScreen from "../screens/BusSelectScreen";
import BusTrackerScreen from "../screens/BusTrackerScreen";
import AboutScreen from "../screens/AboutScreen";

const StopNavigator = createStackNavigator(
  {
    BusSelect: BusSelectScreen,
    BusTracker: BusTrackerScreen,
    About: AboutScreen
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor:
          Platform.OS === "android" ? Colors.primary : Colors.secondary
      },
      headerTitleStyle: {
        fontFamily: "System"
      },
      headerBackTitleStyle: { fontFamily: "System" },
      headerTintColor:
        Platform.OS === "android" ? Colors.secondary : Colors.primary
    }
  }
);

export default createAppContainer(StopNavigator);
