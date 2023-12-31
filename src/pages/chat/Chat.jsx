//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import styleChat from './styleChat';

import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import MessageUser from '../message/MessageUser';
import MessageEnter from '../message/MessageEnter';

const Drawer = createDrawerNavigator();
const Chat = () => {
  return (
    <>
      <NavigationContainer independent={true}>
        <Drawer.Navigator>
          <Drawer.Screen name="messageUser" component={MessageUser} />
          <Drawer.Screen name="messageEnter" component={MessageEnter} />
        </Drawer.Navigator>
      </NavigationContainer>
    </>
  );
};

export default Chat;
