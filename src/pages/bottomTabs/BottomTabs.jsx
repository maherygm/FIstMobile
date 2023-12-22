//import liraries
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React, {Component} from 'react';
import Home from '../Home/Home';
import {View} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Chat from '../chat/Chat';
import Settings from '../settings/Settings';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {COLORS} from '../../Assets/styles/constatantes';

const BottomTabs = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      initialRouteName="home_"
      screenOptions={{
        tabBarActiveTintColor: COLORS.primaryColor,
        headerShown: false,
      }}>
      <Tab.Screen
        name="Profile"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => {
            <MaterialCommunityIcons name="account" color={color} size={size} />;
          },
        }}
      />
      <Tab.Screen
        name="Message"
        component={Chat}
        options={{
          tabBarLabel: 'Message',
          tabBarIcon: ({color, size}) => {
            <MaterialCommunityIcons name="chat" color={color} size={size} />;
          },
        }}
      />
      <Tab.Screen
        name="settings"
        component={Settings}
        options={{
          tabBarLabel: 'Paramettre',
          tabBarIcon: ({color, size}) => {
            <MaterialCommunityIcons name="account" color={color} size={size} />;
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;
