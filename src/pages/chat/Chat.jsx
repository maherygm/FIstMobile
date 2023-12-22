//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

// create a component
const Chat = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyles}>Chat</Text>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#333',
  },
  textStyles: {
    color: '#f1f1f1',
    fontSize: 32,
  },
});

//make this component available to the app
export default Chat;
