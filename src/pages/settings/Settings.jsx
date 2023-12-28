import React, {Component, useState} from 'react';
import {View, Text, Animated, Button, TouchableOpacity} from 'react-native';

const Settings = () => {
  const value = useState(new Animated.ValueXY({x: 0, y: 0}))[0];

  function moveBall() {
    Animated.timing(value, {
      toValue: {
        x: 100,
        y: 100,
      },
      duration: 1000,
      useNativeDriver: false,
    }).start();
  }
  return (
    <View>
      <Animated.View style={value.getLayout()}>
        <View
          style={{
            backgroundColor: 'crimson',
            width: 100,
            height: 100,
            borderRadius: 100 / 2,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              color: 'white',
              fontSize: 32,
            }}>
            Hello
          </Text>
        </View>
      </Animated.View>
      <TouchableOpacity onPress={moveBall}>
        <Text>Click me</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Settings;
