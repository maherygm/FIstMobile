import React from 'react';
import {View} from 'react-native';
import {Text} from 'react-native-paper';
import Routes from './src/routes/Index';

const App = () => {
  return (
    <View style={{flex: 1}}>
      <Routes />
    </View>
  );
};

export default App;
