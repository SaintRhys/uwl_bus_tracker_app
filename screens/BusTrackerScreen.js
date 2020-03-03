import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  FlatList,
  ScrollView,
  Button,
  Image,
} from 'react-native';
import BusItem from '../components/BusItem';
import Colors from '../constants/Colors';

import {Icon} from 'react-native-elements';

import {Banner} from 'react-native-paper';

class BusTrackerScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      dataSource: null,
      isRefreshing: false,
      title: this.props.route.params.title,
      banner: true,
    };
    // this.title = props.navigation.getParam('this.props.route.params.title');
  }
  async componentDidMount() {
    //http://uwlshuttle.utrack.com/api/eta/stops/55?callback.json
    this.fetchBusData();

    this.props.navigation.setOptions({title: this.props.route.params.title});
  }

  async fetchBusData() {
    this.setState({isRefreshing: true});
    const {state} = this.props.navigation;

    //console.warn(this.props.route.params.title);

    try {
      const response = await fetch(
        'http://uwlshuttle.utrack.com/api/eta/stops/' +
          this.props.route.params.busId +
          '?callback.json',
      );
      const responseJson = await response.json();
      this.setState({
        isLoading: false,
        dataSource: responseJson,
        isRefreshing: false,
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
      <View style={styles.screen}>
        <Banner
          visible={this.state.banner}
          actions={[
            {
              label: 'Change Direction',
              onPress: () => {
                this.props.navigation.push('BusTracker', {
                  busId: this.props.route.params.sawp,
                  title: this.props.route.params.sawpTitle,
                  sawp: this.props.route.params.busId,
                  sawpTitle: this.props.route.params.title,
                });
              },
            },
          ]}
          icon={({size}) => (
            <Icon name="swap-horizontal" type="material-community" />
          )}>
          There was a problem processing a transaction on your credit card.
        </Banner>
        <FlatList
          data={this.state.dataSource.services}
          style={{backgroundColor: Colors.background}}
          onRefresh={() => this.fetchBusData()}
          refreshing={this.state.isRefreshing}
          renderItem={({item}) => (
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
    );
  }
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    //alignItems: "center",
    //justifyContent: "center",
    backgroundColor: Colors.background,
  },
  list: {
    // flexGrow: 1
    flex: 1,
    //width: "100%",
    //justifyContent: "center"
    //alignItems: "center"
  },
  noBusContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.background,
    padding: 20,
  },
  noBusText: {
    fontFamily: 'System',
    color: Colors.mainFontColor,
    fontWeight: 'bold',
    fontSize: 40,
  },
});

export default BusTrackerScreen;
