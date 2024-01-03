import React, {Component, useRef, useState} from 'react';
import {
  ScrollView,
  View,
  Text,
  Animated,
  Button,
  TouchableOpacity,
  Modal,
  TouchableWithoutFeedback,
  StatusBar,
} from 'react-native';
import LottieView from 'lottie-react-native';
import style from './stylesettings';

const Settings = () => {
  const value = useState(new Animated.ValueXY({x: 0, y: 0}))[0];

  const down = useState(new Animated.Value(-300))[0];
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

  function Down(params) {
    Animated.spring(down, {
      toValue: 0,
      duration: 200,
      useNativeDriver: true,
    }).start();
  }
  function up(params) {
    Animated.timing(down, {
      toValue: -300,
      duration: 200,
      useNativeDriver: true,
    }).start();
  }
  function handleOpen(params) {
    setopen(true);
    Down();
  }
  function handleClose(params) {
    up();
    setTimeout(() => {
      setopen(false);
    }, 200);
  }
  const [open, setopen] = useState(false);
  return (
    <ScrollView>
      <StatusBar
        barStyle={`${!open ? 'dark-content' : 'dark-content'}`}
        backgroundColor={'white'}
      />
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

      <Modal
        transparent={true}
        style={{height: 300, backgroundColor: 'gray'}}
        visible={open}>
        <TouchableWithoutFeedback onPress={handleClose}>
          <View
            style={{
              width: '100%',
              backgroundColor: 'rgba(0,0,0,0.5)',
              height: '100%',
            }}></View>
        </TouchableWithoutFeedback>

        <Animated.View
          style={[
            style.main,
            {
              transform: [
                {
                  translateY: down,
                },
              ],
            },
          ]}>
          <Text>Hello</Text>

          <Button onPress={handleClose} title="close modal" />
        </Animated.View>
      </Modal>

      <Button onPress={handleOpen} title="open modal" />
    </ScrollView>
  );
};

export default Settings;
