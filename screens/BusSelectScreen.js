import React from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import {Icon} from 'react-native-elements';
import STOPINFO from '../data/bus-data';
import StopItem from '../components/StopItem';

import Colors from '../constants/Colors';

const BusSelectScreen = props => {
  console.log(STOPINFO[0].id);
  return (
    <FlatList
      data={STOPINFO}
      keyExtractor={stop => stop.id}
      style={{backgroundColor: Colors.background}}
      renderItem={stopData => (
        <StopItem
          stopName={stopData.item.title}
          imageUrl={stopData.item.imageUrl}
          direction={stopData.item.direction}
          onViewBus={() => {
            props.navigation.push('BusTracker', {
              busId: stopData.item.id,
              title: stopData.item.title,
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
