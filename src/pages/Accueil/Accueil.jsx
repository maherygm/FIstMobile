//import liraries
import React, {Component, useEffect, useState} from 'react';
import {
  View,
  Button,
  Text,
  Image,
  Animated,
  TouchableOpacity,
} from 'react-native';
import stylesAccueil from './stylesAccueil';

// create a component
const Accueil = ({navigation}) => {
  const data = [
    {
      id: 1,
      title: 'Hopital',
      text: 'lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, dicta!',
    },
    {
      id: 2,
      title: 'School',
      text: 'lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, dicta!',
    },
    {
      id: 3,
      title: 'Work',
      text: 'lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, dicta!',
    },
    {
      id: 4,
      title: 'University',
      text: 'lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, dicta!',
    },
  ];
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

  useEffect(() => {
    moveBall();
    console.log('hello', <View />);
  });

  return (
    <View>
      <Image
        source={require('../../Assets/img/fond.jpg')}
        style={stylesAccueil.imageFond}
      />
      <View style={stylesAccueil.mainContent}>
        <Text style={stylesAccueil.description}>
          Bienvenue ! Explorez, découvrez, simplifiez, épanouissez, connectez,
          partagez, progressez, réussissez, inspirez.
        </Text>
        <Text style={stylesAccueil.text}>Smart Task</Text>
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
      </View>

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
