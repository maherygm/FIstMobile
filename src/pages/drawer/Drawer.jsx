//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import MessageUser from '../message/MessageUser';
import MessageEnter from '../message/MessageEnter';

const Drawer = createDrawerNavigator();

const DrawerComponent = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="messageUser" component={MessageUser} />
        <Drawer.Screen name="messageEnter" component={MessageEnter} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default DrawerComponent;
