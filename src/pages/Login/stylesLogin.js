import {StyleSheet} from 'react-native';
import {COLORS} from '../../Assets/styles/constatantes';
import {white} from 'react-native-paper/lib/typescript/styles/themes/v2/colors';

const StylesLogin = StyleSheet.create({
  maincontainer: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.backgroundColor,
  },

  blocInput: {
    width: '80%',
    height: '80%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: COLORS.fontColor,
    fontSize: 32,
    fontFamily: 'kronaOneRegular',
    marginBottom: 20,
  },
  blc: {
    width: '100%',
    margin: 10,
    padding: 10,
  },
  inputStyle: {
    backgroundColor: COLORS.secondaryColor,
    color: 'white',
    width: '100%',
    borderRadius: 20,
    padding: 15,
  },
  button: {
    margin: 10,
    backgroundColor: COLORS.primaryColor,
    padding: 15,
    borderRadius: 20,
    marginTop: 20,
    width: 160,
  },
  btnContent: {
    color: COLORS.backgroundColor,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
export default StylesLogin;
