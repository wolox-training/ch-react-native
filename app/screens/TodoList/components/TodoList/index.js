import React from 'react';
import { FlatList, StyleSheet } from 'react-native';

import TodoItemContainer from './components/TodoItemContainer';

function TodoList({ onDeleteItem, listData }) {
  renderList = item => (
    <TodoItemContainer onDeleteItem={onDeleteItem} index={item.key} item={item} />
  );

  return (
    <FlatList
      style={styles.listContainer}
      data={listData}
      renderItem={({ item }) => renderList(item)}
    />
  )
}

const styles = StyleSheet.create({
  listContainer: {
    alignSelf: 'stretch',
    backgroundColor: 'white',
    flex: 1
  }
});

export default TodoList;
