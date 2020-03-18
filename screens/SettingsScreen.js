import * as React from 'react';
import {Text, View, StyleSheet, Switch} from 'react-native';

// You can import from local files

// or any pure javascript modules available in npm
import {Avatar, Button, Card, Title, Paragraph} from 'react-native-paper';

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      value: false,
    };
  }

  toggleSwitch = value => {
    this.setState({value: value});
    console.log('Switch 1 is: ' + value);
  };

  render() {
    return (
      <View style={styles.container}>
        <Card>
          <Card.Content>
            <Title>Night Mode</Title>
            <Switch
              onValueChange={this.toggleSwitch}
              value={this.state.value}
            />
          </Card.Content>
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
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
