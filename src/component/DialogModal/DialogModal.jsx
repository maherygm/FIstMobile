//import liraries
import React, {Component, useState} from 'react';
import {View, Text, StyleSheet, Modal, Button} from 'react-native';

// create a component
const DialogModal = ({visible, children, handleClose}) => {
  const [showModal, setChowModal] = useState(visible);
  return (
    <Modal transparent visible={visible}>
      <View style={styles.modalBackground}>
        <View style={styles.container}>{children}</View>
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
  },
});

export default DialogModal;
