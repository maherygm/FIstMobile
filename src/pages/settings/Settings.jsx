import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Settings = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyles}>Settings</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#333',
  },
  textStyles: {
    color: '#f1f1f1',
    fontSize: 32,
  },
});

export default Settings;
