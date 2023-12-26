//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import styleChat from './styleChat';

const Chat = () => {
  return (
    <View style={styles.container}>
      <Text style={[styles.textStyles, styleChat.fontKronaOne]}>Chat</Text>
    </View>
  );
};
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

export default Chat;
