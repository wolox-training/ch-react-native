import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
  itemContainer: {
    alignItems: 'center',
    alignSelf: 'stretch',
    borderBottomWidth: 1,
    borderColor: '#bbb',
    height: 50,
    flexDirection: 'row',
    paddingHorizontal: 20
  },
  itemContainerSelected: {
    backgroundColor: '#bbb'
  },
  itemTitle: {
    flexGrow: 1,
    fontSize: 24
  },
  itemDelete: {
    color: 'red',
    fontSize: 16,
    fontWeight: '700'
  }
});
