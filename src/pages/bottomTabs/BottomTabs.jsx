//import liraries
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React, {Component} from 'react';
import Home from '../Home/Home';
import {View, Image} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Chat from '../chat/Chat';
import Settings from '../settings/Settings';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {COLORS} from '../../Assets/styles/constatantes';
import styleBottomTabs from './styleBottomTabs';

const BottomTabs = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      initialRouteName="home_"
      screenOptions={{
        tabBarActiveTintColor: COLORS.primaryColor,
        headerShown: false,
        tabBarStyle: {
          backgroundColor: COLORS.secondaryColor,
          height: 67,
        },
      }}>
      <Tab.Screen
        name="Profile"
        component={Home}
        options={{
          tabBarLabel: 'Home',

          tabBarIcon: ({color, size}) => {
            return (
              <Image
                style={styleBottomTabs.icons}
                source={require('../../Assets/img/icons8_home_32px.png')}
              />
            );
          },

          tabBarActiveBackgroundColor: COLORS.backgroundColor,
          tabBarLabelStyle: {
            fontSize: 16, // Taille de la police des libellés
          },
        }}
      />
      <Tab.Screen
        name="Message"
        component={Chat}
        options={{
          tabBarLabel: 'Message',
          tabBarIcon: ({color, size}) => {
            return (
              <Image
                style={styleBottomTabs.icons}
                source={require('../../Assets/img/icons8_chat_32px.png')}
              />
            );
          },
          tabBarActiveBackgroundColor: COLORS.backgroundColor,
          tabBarLabelStyle: {
            fontSize: 16, // Taille de la police des libellés
          },
        }}
      />
      <Tab.Screen
        name="settings"
        component={Settings}
        options={{
          tabBarLabel: 'Parametre',
          tabBarIcon: ({color, size}) => {
            return (
              <Image
                style={styleBottomTabs.icons}
                source={require('../../Assets/img/icons8_settings_32px.png')}
              />
            );
          },
          tabBarActiveBackgroundColor: COLORS.backgroundColor,
          tabBarLabelStyle: {
            fontSize: 16, // Taille de la police des libellés
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;
