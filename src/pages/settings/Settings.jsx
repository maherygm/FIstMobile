import React, {Component, useRef, useState} from 'react';
import {
  ScrollView,
  View,
  Text,
  Animated,
  Button,
  TouchableOpacity,
} from 'react-native';
import LottieView from 'lottie-react-native';

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

  const lotieRef = useRef(null);

  function play() {
    lotieRef.current.play();
  }

  function pause() {
    lotieRef.current.pause();
    alert('hello');
  }
  return (
    <ScrollView>
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

      <Button title="play" onPress={play} />
      <Button title="pause" onPress={pause} />
      <LottieView
        ref={lotieRef}
        source={require('../../Assets/loties/settingsLotie.json')}
        style={{
          width: 500,
          height: 500,
        }}
        autoPlay
        loop={false}
      />
    </ScrollView>
  );
};

export default Settings;
