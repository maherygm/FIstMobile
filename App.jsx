import React from 'react';
import {StatusBar, View} from 'react-native';
import {Text} from 'react-native-paper';
import Routes from './src/routes/Index';
import {COLORS} from './src/Assets/styles/constatantes';

const App = () => {
  return (
    <View style={{flex: 1}}>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={COLORS.backgroundColor}
      />
      <Routes />
    </View>
  );
};

export default App;
