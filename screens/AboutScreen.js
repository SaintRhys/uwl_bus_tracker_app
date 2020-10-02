import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {Avatar, Button, Card, Title, Paragraph} from 'react-native-paper';

const AboutScreen = props => {
  return (
    <View>
      <Card>
        <Card.Content>
          <Title>About </Title>
          <Paragraph>
            This is the unofficial UWL bus tracker app, as there isn't one
            provided by UWL. This was made by me and a friend for use by UWL
            students. If something doesn't seem right, you want more features
            added or you want to get involved, get in contact.
          </Paragraph>
        </Card.Content>
      </Card>

      <Card style={{marginTop: 10}}>
        <Card.Title title="Developers" />
        <Card.Content>
          <Paragraph>Rhys St Romaine</Paragraph>
          <Paragraph>David Garrick - Bangbola</Paragraph>
        </Card.Content>
      </Card>
      {/* <Card style={{marginTop: 10}}>
        <Card.Title title="Socials" />
        <Card.Content>
          <Paragraph>Privacy Policy</Paragraph>
          <Paragraph>Linked in</Paragraph>
          <Paragraph>Git Hub</Paragraph>
        </Card.Content>
      </Card> */}
    </View>
  );
};

const styles = StyleSheet.create({});

export default AboutScreen;
