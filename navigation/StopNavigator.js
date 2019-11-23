import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

import BusSelectScreen from "../screens/BusSelectScreen";
import BusTrackerScreen from "../screens/BusTrackerScreen";

const StopNavigator = createStackNavigator({
  BusSelect: BusSelectScreen,
  BusTracker: BusTrackerScreen
});

export default createAppContainer(StopNavigator);
