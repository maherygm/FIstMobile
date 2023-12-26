import {StyleSheet} from 'react-native';
import {COLORS} from '../../Assets/styles/constatantes';

const styleChat = StyleSheet.create({
  container: {
    width: '100%',
  },
  padding10: {
    padding: 10,
  },
  sampleText: {
    color: COLORS.fontColor,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  fontKronaOne: {
    fontFamily: 'kronaOneRegular',
  },
  fontNunito: {
    fontFamily: 'NunitoSans',
  },
});

export default styleChat;
