import {StyleSheet} from 'react-native';
import {COLORS, PADDING} from '../../Assets/styles/constatantes';

const dashBoardStyles = StyleSheet.create({
  body: {
    backgroundColor: COLORS.backgroundColor,
  },
  header: {
    backgroundColor: COLORS.secondaryColor,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: PADDING.horizontal,
    paddingVertical: 10,
    elevation: 1,
  },
  texte: {
    color: COLORS.fontColor,
    fontSize: 18,
  },
  userImg: {
    width: 50,
    height: 50,
    borderRadius: 64,
  },

  cardItems: {
    padding: 15,
    width: 300,
    backgroundColor: COLORS.secondaryColor,
    margin: 10,
    borderRadius: 25,
  },
  cardItemsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.fontColor,
  },
  sampleText: {
    color: COLORS.fontColor,
  },
});
export default dashBoardStyles;
