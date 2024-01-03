import React, {useEffect} from 'react';
import {StatusBar, View} from 'react-native';
import {Button, Text} from 'react-native-paper';
import Routes from './src/routes/Index';
import {COLORS} from './src/Assets/styles/constatantes';
import NativeDevSettings from 'react-native/Libraries/NativeModules/specs/NativeDevSettings';
const App = () => {
  const connectToRemoteDebugger = () => {
    NativeDevSettings.setIsDebuggingRemotely(true);
  };
  return (
    <View style={{flex: 1}}>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={COLORS.backgroundColor}
      />
      <Routes />
      {/* <Button onPress={connectToRemoteDebugger}>Debug</Button> */}
    </View>
  );
};

export default App;
