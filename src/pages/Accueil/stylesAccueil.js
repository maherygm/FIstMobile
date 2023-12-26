import {StyleSheet} from 'react-native';
import {COLORS} from '../../Assets/styles/constatantes';

const stylesAccueil = StyleSheet.create({
  imageFond: {
    flex: 1,
    position: 'absolute',
    resizeMode: 'cover',
    width: '100%',
    height: '100%',
  },
  mainContent: {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  description: {
    width: '85%',
    fontSize: 18,
    margin: 20,
    marginTop: 120,
    color: COLORS.fontColor,
  },
  text: {
    fontFamily: 'kronaOneRegular',
    fontSize: 40,
    textAlign: 'center',
    color: COLORS.fontColor,
  },

  btnBegin: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: COLORS.primaryColor,
    padding: 15,
    borderRadius: 20,
  },
  textCommencer: {
    fontWeight: 'bold',
    fontSize: 16,
    color: COLORS.backgroundColor,
  },
});

export default stylesAccueil;
