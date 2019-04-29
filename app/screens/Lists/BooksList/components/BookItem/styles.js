import { StyleSheet } from 'react-native'

export default styles = StyleSheet.create({
  itemContainer: {
    alignItems: 'center',
    alignSelf: 'stretch',
    borderBottomWidth: 1,
    borderColor: '#bbbbbb',
    height: 80,
    flexDirection: 'row',
    paddingHorizontal: 20
  },
  image: {
    height: 70,
    marginRight: 20,
    width: 70
  },
  placeholderImage: {
    backgroundColor: '#bbbbbb',
    borderRadius: 50,
    height: 70,
    marginRight: 20,
    width: 70
  },
  itemContainerSelected: {
    backgroundColor: '#bbbbbb'
  },
  textContainer: {
    justifyContent: 'center'
  },
  itemTitle: {
    fontSize: 18,
    fontWeight: '700'
  },
  itemAuthor: {
    fontSize: 14
  }
});