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
  StatusBar,
} from 'react-native';
import BusItem from '../components/BusItem';
import Colors from '../constants/Colors';

import {Icon} from 'react-native-elements';

import {Banner} from 'react-native-paper';
import {TouchableOpacity} from 'react-native-gesture-handler';

class BusTrackerScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      dataSource: null,
      isRefreshing: false,
      title: this.props.route.params.title,
      busId: this.props.route.params.busId,
      sawpTitle: this.props.route.params.sawpTitle,
      sawpId: this.props.route.params.sawp,
      banner: true,
      direction:this.props.route.params.direction
    };
    // this.title = props.navigation.getParam('this.props.route.params.title');
  }
  async componentDidMount() {
    //http://uwlshuttle.utrack.com/api/eta/stops/55?callback.json
    this.fetchBusData(this.state.busId);
    console.log('new id: ' + this.state.sawpId + ' : ' + this.state.sawpTitle);
    console.log('old id: ' + this.state.busId + ' : ' + this.state.title);
    this.props.navigation.setOptions({title: this.props.route.params.title });
  }

  async fetchBusData(busId) {
    this.setState({isRefreshing: true});

    //console.warn(this.props.route.params.title);
    console.log(this.state.busId);
    try {
      const response = await fetch(
        'http://uwlshuttle.utrack.com/api/eta/stops/' +
          busId +
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

  changeDirection() {
    console.log('changing direction');
    console.log('new id: ' + this.state.sawpId + ' : ' + this.state.sawpTitle);
    console.log('old id: ' + this.state.busId + ' : ' + this.state.title);
    let tempId = this.state.busId;
    let tempTitle = this.state.title;
    this.setState({
      busId: this.state.sawpId,
      title: this.state.sawpTitle,
      sawpTitle: tempTitle,
      sawpId: tempId,
      isLoading: true,
      isRefreshing: false,
    });

    this.props.navigation.setOptions({title: this.state.sawpTitle});
    this.fetchBusData(this.state.sawpId);
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View style={[styles.screen, {paddingTop: 10}]}>
         <StatusBar
            barStyle="light-content"
            backgroundColor={Colors.primary}
          />
          <ActivityIndicator />
        </View>
      );
    }
    if (this.state.dataSource.services.length === 0) {
      return (
        <View style={styles.noBusContainer}>
        <StatusBar
            barStyle="light-content"
            backgroundColor={Colors.primary}
          />
          <Text style={styles.noBusText}>NO BUSES DUE</Text>
        </View>
      );
    }
    //console.log(this.state.dataSource);
    return (
      <View style={styles.screen}>
       <StatusBar
            barStyle="light-content"
            backgroundColor={Colors.primary}
          />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: 10,
            paddingVertical: 5,
            backgroundColor: 'white',
          }}>
          <Icon name="swap-horizontal" type="material-community" />
          <TouchableOpacity style={{}} onPress={() => this.changeDirection()}>
            <Text style={{fontSize: 20, fontWeight: 'bold', color: Colors.primary}}>
              Change Direction
            </Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={this.state.dataSource.services}
          style={{flex: 1,}}
          onRefresh={() => this.fetchBusData(this.state.busId)}
          refreshing={this.state.isRefreshing}
          renderItem={({item}) => (
            <BusItem
              time={item.time.arrive.time}
              hours={item.time.arrive.hrs}
              minutes={item.time.arrive.mins}
              title={this.state.direction}
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
    backgroundColor: '#fff',
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
  //  backgroundColor: Colors.background,
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
