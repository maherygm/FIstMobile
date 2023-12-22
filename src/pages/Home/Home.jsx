//import liraries
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import dashBoardStyles from './styles';
import {fakeActivities} from '../../fakeData/FakeData';
// create a component
const Home = () => {
  return (
    <ScrollView style={dashBoardStyles.body}>
      <View style={dashBoardStyles.header}>
        <Text style={dashBoardStyles.texte}>John Doe</Text>
        <Image
          source={require('../../Assets/img/kid-1837375_640.png')}
          style={dashBoardStyles.userImg}
        />
      </View>

      <FlatList
        horizontal={true}
        data={fakeActivities}
        keyExtractor={item => item.id}
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => {
          return (
            <TouchableOpacity style={dashBoardStyles.cardItems}>
              <Text style={dashBoardStyles.cardItemsTitle}>{item.title}</Text>
              <Text style={dashBoardStyles.sampleText}>{item.text}</Text>
            </TouchableOpacity>
          );
        }}
      />
    </ScrollView>
  );
};

export default Home;
