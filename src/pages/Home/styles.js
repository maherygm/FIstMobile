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
  flatlist: {
    marginTop: 20,
    marginBottom: 20,
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

  blocquestion: {
    padding: 10,
  },
  mainContainerCard: {
    width: 300,
    paddingLeft: 10,
    paddingRight: 10,
  },
  cardMain: {
    width: '100%',
    borderRadius: 10,
    backgroundColor: COLORS.secondaryColor,
  },
  imgCardMain: {
    width: '100%',
    borderRadius: 10,
  },
  texteCardMain: {
    position: 'absolute',
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.7)',
    width: '100%',
    borderRadius: 10,
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0,
    padding: 10,
    color: COLORS.fontColor,
  },
  separator: {
    textAlign: 'right',
    paddingRight: 10,
    color: COLORS.primaryColor,
  },
  mainContainercrd: {
    padding: 10,
    width: '100%',
  },
  petiteCard: {
    width: '100%',
    backgroundColor: COLORS.secondaryColor,
    padding: 10,
    borderRadius: 20,
    flexDirection: 'row',
    overflow: 'hidden',
    gap: 10,
  },
  bloc: {
    width: '100%',
  },
  cardTexte: {
    width: '80%',
  },

  beforeseparato: {
    paddingLeft: 10,
  },

  modalContainer: {
    backgroundColor: 'white',
    padding: 10,
    width: '80%',
    borderRadius: 20,
  },
});
export default dashBoardStyles;
