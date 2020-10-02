import React, {useEffect, useCallback} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
  StatusBar,
} from 'react-native';
import {Icon} from 'react-native-elements';
import STOPINFO from '../data/bus-data';
import StopItem from '../components/StopItem';

import Colors from '../constants/Colors';

const BusSelectScreen = props => {
  useEffect(() => {}, []);

  const getStopItem = useCallback(item => {
    return (
      <StopItem
        stopName={item.item.title}
        imageUrl={item.item.imageUrl}
        direction={item.item.direction}
        onViewBus={() => {
          props.navigation.push('BusTracker', {
            busId: item.item.id,
            title: item.item.title,
            sawp: item.item.sawp,
            sawpTitle: item.item.sawpTitle,
          });
        }}
      />
    );
  }, []);

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor={Colors.primary} />
      <FlatList
        data={STOPINFO}
        keyExtractor={stop => stop.id}
        style={{backgroundColor: Colors.background}}
        renderItem={getStopItem}
      />
    </>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

BusSelectScreen.navigationOptions = props => {
  return {
    headerTitle: 'UWL BUS TRACKER',
    headerRight: (
      <TouchableOpacity
        onPress={() => props.navigation.push('About')}
        style={{marginRight: 10}}>
        <Icon
          //style={{ paddingRight: 40 }}
          size={30}
          name="information-outline"
          type="material-community"
          color={Colors.primary}
          //iconStyle={{ marginLeft: 30 }}
        />
      </TouchableOpacity>
    ),
  };
};

export default BusSelectScreen;
