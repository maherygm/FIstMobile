//import liraries
import React, {Component, useEffect, useRef, useState} from 'react';
import {
  View,
  Button,
  Text,
  Image,
  Animated,
  TouchableOpacity,
  Dimensions,
  PanResponder,
} from 'react-native';
import stylesAccueil from './stylesAccueil';

// create a component
const Accueil = ({navigation}) => {
  const {width, height} = Dimensions.get('window');

  // console.log('width', width);
  // console.log('heigth', height);
  const value = useState(new Animated.Value(0))[0];
  function moveBall() {
    Animated.spring(value, {
      toValue: 1,
      // duration: 1000,
      useNativeDriver: true,
    }).start();
  }
  function unmoveBall() {
    Animated.spring(value, {
      toValue: 0,
      // duration: 1000,
      useNativeDriver: true,
    }).start();
  }

  // useEffect(() => {
  //   moveBall();
  //   console.log('hello', <View />);
  // });

  const translate = useState(new Animated.Value(0))[0];
  function handlePress(params) {
    Animated.spring(translate, {
      toValue: -width,
      useNativeDriver: false,
    }).start();
  }
  function handleBack(params) {
    Animated.spring(translate, {
      toValue: 0,
      useNativeDriver: false,
    }).start();
  }

  const pan = useState(new Animated.ValueXY({x: 0, y: 0}))[0];

  useEffect(() => {
    mycomponent.current.measure((fx, fy, width, height, px, py) => {
      console.log("Position sur l'écran :", px, py);
    });
  });
  const mycomponent = useRef(null);

  const [swipUp, setswipUp] = useState(false);
  const [swipdown, setdown] = useState(false);

  function up(params) {
    Animated.timing(pan, {
      toValue: {
        x: 0,
        y: -170,
      },
      duration: 200,

      useNativeDriver: false,
    }).start();
  }
  function down(params) {
    Animated.timing(pan, {
      toValue: {
        x: 0,
        y: 0,
      },
      duration: 200,

      useNativeDriver: false,
    }).start();
  }
  const panResponder = useState(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: (_, event) => {
        const {dx, dy} = event;
        // pan.x.setValue(event.dx);
        // pan.y.setValue(event.dy);

        mycomponent.current.measure((fx, fy, width, height, px, py) => {
          console.log("Position sur l'écran :", px, py);
        });
        if (dy < 0) {
          console.log('swip up');
          // console.log(pan.y);
          // pan.y.setValue(-170);
          setswipUp(true);
          up();
        } else {
          // console.log('swip down');
          // pan.y.setValue(170);
          down();
        }
      },
      onPanResponderRelease: () => {
        // pan.y.setValue(-170);
        // pan.extractOffset();
      },
    }),
  )[0];

  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'row',
      }}>
      <Image
        source={require('../../Assets/img/fond.jpg')}
        style={stylesAccueil.imageFond}
      />
      <Animated.View
        style={[
          stylesAccueil.mainContent,
          {
            transform: [
              {
                translateX: translate,
              },
            ],
            backgroundColor: '#F1F2F3',
          },
        ]}>
        <Text>Page 1</Text>

        <View
          style={{
            width: 100,
            height: 100,
            backgroundColor: '#F1F2F3',
            borderRadius: 100 / 2,
            elevation: 10,
            shadowColor: '#333',
            shadowOffset: {width: 0, height: 5}, // Ajustez ces valeurs en conséquence
            shadowOpacity: 0.5, // Ajustez cette valeur en conséquence (entre 0 et 1)
            shadowRadius: 10,
          }}
        />

        <Button title="step 2" onPress={handlePress} />
      </Animated.View>
      <Animated.View
        style={[
          stylesAccueil.mainContent,
          {backgroundColor: 'blue'},
          {
            transform: [
              {
                translateX: translate,
              },
            ],
            backgroundColor: 'blue',
          },
        ]}>
        <Text style={stylesAccueil.description}>
          Bienvenue ! Explorez, découvrez, simplifiez, épanouissez, connectez,
          partagez, progressez, réussissez, inspirez.
        </Text>
        <Text style={stylesAccueil.text}>Smart Task</Text>
        <Button title="back" onPress={handleBack} />
        <TouchableOpacity
          style={stylesAccueil.btnBegin}
          onPress={() => {
            console.log('hello');
            navigation.navigate('Login');
          }}>
          <View>
            <Text style={stylesAccueil.textCommencer}>Commencer</Text>
          </View>
        </TouchableOpacity>
      </Animated.View>

      <Animated.View
        ref={mycomponent}
        style={{
          width: width,

          height: 200,
          backgroundColor: '#fff',
          position: 'absolute',
          bottom: -170,
          elevation: 10,

          transform: [
            {
              translateY: pan.y,
            },
          ],

          borderTopLeftRadius: 40,
          borderTopRightRadius: 40,

          shadowColor: '#333',
          shadowOffset: {width: 0, height: 5}, // Ajustez ces valeurs en conséquence
          shadowOpacity: 0.5, // Ajustez cette valeur en conséquence (entre 0 et 1)
          shadowRadius: 10,
        }}
        {...panResponder.panHandlers}
      />

      {/* <View>
        <Animated.View
          style={{
            backgroundColor: 'crimson',
            width: 100,
            height: 100,
            borderRadius: 100 / 2,
            justifyContent: 'center',
            alignItems: 'center',
            transform: [
              {
                scale: value,
              },
            ],
          }}>
          <Text
            style={{
              color: 'white',
              fontSize: 32,
            }}>
            Hello
          </Text>
        </Animated.View>
      </View>

      <TouchableOpacity
        style={{
          marginTop: 100,
          backgroundColor: 'blue',
          padding: 10,
        }}
        onPress={moveBall}>
        <Text style={{color: 'white'}}>come</Text>
      </TouchableOpacity>
      <Button
        onPress={unmoveBall}
        title="back"
      /> */}
    </View>
  );
};

export default Accueil;
