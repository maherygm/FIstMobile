//import liraries
import React, {Component, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import StylesLogin from './stylesLogin';
import stylesAccueil from '../Accueil/stylesAccueil';
import {COLORS} from '../../Assets/styles/constatantes';

// create a component
const Login = ({navigation}) => {
  const [textValue, setTextValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [numberValue, setNumberValue] = useState('');
  const handlechangeNom = text => {
    setTextValue(text);
  };
  const handlechangeMdp = pass => {
    setPasswordValue(pass);
  };
  return (
    <View style={StylesLogin.maincontainer}>
      <View style={StylesLogin.blocInput}>
        <Text style={StylesLogin.text}>Smart Task </Text>
        <View style={StylesLogin.blc}>
          <TextInput
            placeholder="Identifiant"
            onChangeText={handlechangeNom}
            value={textValue}
            style={StylesLogin.inputStyle}
            placeholderTextColor={'rgba(255,255,255,0.3)'}
          />
        </View>
        <View style={StylesLogin.blc}>
          <TextInput
            secureTextEntry={true}
            placeholder="Mots de Passe"
            onChangeText={handlechangeMdp}
            value={passwordValue}
            style={StylesLogin.inputStyle}
            placeholderTextColor={'rgba(255,255,255,0.3)'}
          />
        </View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Main');
          }}
          style={StylesLogin.button}>
          <View>
            <Text style={StylesLogin.btnContent}>Se Connecter </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;
