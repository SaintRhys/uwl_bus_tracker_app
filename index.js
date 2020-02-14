import { AppRegistry, Platform } from 'react-native';
import App from './App';

AppRegistry.registerComponent('uwl_bus_tracker', () => App);

if (Platform.OS === 'web') {
  const rootTag = document.getElementById('root') || document.getElementById('main');
  AppRegistry.runApplication('uwl_bus_tracker', { rootTag });
}
