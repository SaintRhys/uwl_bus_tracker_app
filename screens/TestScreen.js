import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Colors from '../constants/Colors';

// You can import from local files

import {Icon} from 'react-native-elements';

// or any pure javascript modules available in npm
import {Avatar, Button, Card, Title, Paragraph} from 'react-native-paper';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Card style={{margin: 10}}>
          <Card.Cover
            style={{height: 120}}
            source={{uri: 'https://picsum.photos/700'}}
          />

          <Card.Title
            title="SMR"
            subtitle="To -> Ealing Broadway"
            left={props => (
              <Icon
                name="bus"
                reverse
                size={20}
                type="material-community"
                color={Colors.primary}
                containerStyle={{marginLeft: -10}}
              />
            )}
          />
        </Card>

        <Card style={{margin: 10}}>
          <Card.Title
            title="Little Ealing Lane "
            subtitle="To -> Ealing Broadway"
            left={props => (
              <Icon
                reverse
                name="bus"
                size={20}
                type="material-community"
                color={Colors.primary}
                containerStyle={{marginLeft: -10}}
              />
            )}
          />
          <Card.Cover
            style={{height: 120}}
            source={{uri: 'https://picsum.photos/700'}}
          />
        </Card>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
  },
});
