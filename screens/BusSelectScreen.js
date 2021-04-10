import React, {useEffect, useCallback} from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar , ScrollView, SectionList, Image,} from 'react-native';

import { Avatar, Button, Card, Title, Paragraph, IconButton } from 'react-native-paper';

import constants from "../constants/Colors";

import Colors from '../constants/Colors';


import STOPINFO from '../data/bus-data';
import StopItem from '../components/StopItem';

import Stops from '../components/testCard';

const CategorysItems = [
  {
    color: '#dba118',
    color2: '#F7B61C',
    title: 'Towards Paragon',
    icon: 'bus-stop-covered',
  
  },
  {
    color: 'rgb(64,37,91)',
    color2: 'rgb(122,48,160)',
    title: 'Towards SMR',
    icon: 'bus-stop-uncovered',
  
  },
];



  

const App = props => {


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
            direction: item.item.direction,
          });
        }}
      />
    );
  }, []);



  let Header = [
    {
      id: '1',
      list: (
      <>
       <Text style={{marginTop: 0, fontSize: 26, marginLeft:10, fontWeight:'bold'}}>The Unofficial {'\n'}<Text style={{color:constants.primary}}>UWL</Text> bus tracker</Text>
      </>
      ),
    },
  ];


  let Ads = [
    {
      id: '1',
      list: (<>
<Card style={{marginTop:20 , marginLeft:10, marginRight:10 , backgroundColor: '#28292e'}}>
  <Card.Content>
  <Title style={{color:'#fff'}}></Title>
  <Paragraph style={{color:'#fff'}} >  </Paragraph>
   
  </Card.Content>
</Card>
 </>
      ),
    },
  ];

  let A = [
    {
      id: '1',
      list: (
        <FlatList
        style={{margin:6}}
        horizontal={true}
        data={CategorysItems}
        renderItem={({item}) => (
          <Card style={{height:110, width: 110, margin: 4, borderRadius: 5 ,backgroundColor:'#28292e'}}>
         
          <View style={{alignItems:'center' ,padding:0}}>
              <Avatar.Icon size={50} icon={item.icon}  style={{backgroundColor:'transparent',marginBottom: -8, marginTop: 8}}/>
          </View>
          
          <Text style={styles.paragraph}>{item.title}</Text>
       
          </Card>
        )}
        keyExtractor={item => item.id}
        
        />
      ),
    },
  ];
  let B = [
    {
      id: '2',
      list: (
        <FlatList
        data={STOPINFO}
        style={{margin:6}}
        keyExtractor={stop => stop.id}
       // style={{backgroundColor: Colors.background}}
        renderItem={getStopItem}
      />
      ),
    },
  ];





  return (
    <SafeAreaView style={styles.container}>

<StatusBar
            barStyle="light-content"
            backgroundColor={Colors.primary}
          />
    
    <SectionList
          stickySectionHeadersEnabled={true}
          sections={[
            {title: 'Welcome', data: Header},
         //   {title: 'Directions', data: A},
            {title: 'Bus Stops', data: B},
          ]}
          renderSectionHeader={({section}) => (
            <Text style={styles.sectionHeaderStyle}>{section.title}</Text>
          )}
          renderItem={({item}) => (
            // Item for the FlatListItem
            <View>{item.list}</View>
          )}
          keyExtractor={(item, index) => index}
      //    style={{marginTop:12}}
        />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#fff'
  },
  title: {
    fontSize: 16,
  },
  paragraph: {
    padding:6, 
    fontSize: 16,
    textAlign:'center',
    color:'#fff',
    fontWeight:'bold'
  },
  category: {
    marginLeft: 10,
    marginRight: 10,
    paddingTop:20,
    
    fontSize: 18,
    fontWeight: 'bold',
    color:'#fff',
  },
  Ads: {
    marginLeft: 10,
    marginRight: 10,
    paddingTop:10,
    marginBottom:10,
    fontSize: 16,
    fontWeight: 'bold',
    color:'#fff',
    textAlign:'right'
  },
  linearGradient: {
    flex: 1,
    borderRadius: 5
  },

  card: {
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    marginHorizontal: 10,
    borderRadius: 20,
    height:100, 
  },

  navBar: {
    flexDirection: 'row',
    marginTop:12
  },
  leftContainer: {
    flex: 1,
  },
  rightContainer: {
  },
  sectionHeaderStyle: {
    backgroundColor:'#fff',
    fontSize: 20,
    padding: 10,
    color: '#000',
  },

});

export default App;