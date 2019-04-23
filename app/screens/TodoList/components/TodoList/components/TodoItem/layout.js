import React from 'react';
import { View } from 'react-native';

import CheckBox from './components/CheckBox';

function TodoItem({ onCheck, onDelete, isChecked }) {
  return (
    <TouchableOpacity
      onPress={this.handleCheck}
      style={[
        styles.itemContainer,
        isChecked && styles.itemContainerSelected
      ]}
    >
      <Text style={styles.itemTitle}>{item.text}</Text>
      <CheckBox isChecked={isChecked} />
      <TouchableOpacity onPress={this.handleDelete}>
        <Text style={styles.itemDelete}>X</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  )
};

const styles = StyleSheet.create({
  itemContainer: {
    alignItems: 'center',
    alignSelf: 'stretch',
    borderBottomWidth: 1,
    borderColor: '#bbbbbb',
    height: 50,
    flexDirection: 'row',
    paddingHorizontal: 20
  },
  itemContainerSelected: {
    backgroundColor: '#bbbbbb'
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

export default TodoItem;
