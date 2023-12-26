//import liraries
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  Image,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';
import stylesAccueil from './stylesAccueil';

// create a component
const Accueil = ({navigation}) => {
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
          onPress={() => navigation.navigate('Login')}>
          <View>
            <Text style={stylesAccueil.textCommencer}>Commencer</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Accueil;
