//import liraries
import React, {Component, useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Modal,
  Button,
  TouchableWithoutFeedback,
  Animated,
} from 'react-native';

// create a component
const DialogModal = ({visible, children, handleClose}) => {
  const [showModal, setChowModal] = useState(visible);
  useEffect(() => {
    setChowModal(visible);
  }, [visible]);

  function handleCloseModal(params) {
    setChowModal(false);
  }

  // const scaleC = useState(new Animated.Value(0))[0];

  // function animation(params) {
  //   Animated.timing(scaleC, {
  //     toValue: 1,
  //     duration: 1000,
  //     useNativeDriver: false,
  //   }).start();
  // }
  // function ann(params) {
  //   Animated.timing(scaleC, {
  //     toValue: 0,
  //     duration: 500,
  //     useNativeDriver: true,
  //   }).start();
  //   console.log('demonted', scaleC);
  // }
  // useEffect(() => {
  //   animation();
  //   console.log('monted');
  // }, [showModal]);
  return (
    <Modal transparent visible={showModal}>
      <TouchableWithoutFeedback onPress={handleClose}>
        <View style={styles.modalBackground}></View>
      </TouchableWithoutFeedback>
      <View style={styles.centerElement}>
        <View style={styles.containern}>{children}</View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 5,
    position: 'absolute',
    height: '100%',
    width: '100%',
  },
  centerElement: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },
});

export default DialogModal;
