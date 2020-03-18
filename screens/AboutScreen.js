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
            Wise busy past both park when an ye no. Nay likely her length sooner
            thrown sex lively income. The expense windows adapted sir. Wrong
            widen drawn ample eat off doors money. Offending belonging promotion
            provision an be oh consulted ourselves it. Blessing welcomed
            ladyship she met humoured sir breeding her. Six curiosity day
            assurance bed necessary.{' '}
          </Paragraph>
        </Card.Content>
      </Card>

      <Card style={{marginTop: 10}}>
        <Card.Title title="Creatures" />
        <Card.Content>
          <Paragraph>Rhys St Romaine</Paragraph>
          <Paragraph>David Garrick - Bangbola</Paragraph>
        </Card.Content>
      </Card>
      <Card style={{marginTop: 10}}>
        <Card.Title title="Socials" />
        <Card.Content>
          <Paragraph>Privacy Policy</Paragraph>
          <Paragraph>Linked in</Paragraph>
          <Paragraph>Git Hub</Paragraph>
        </Card.Content>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({});

export default AboutScreen;
