import React from 'react';
import { FlatList, StyleSheet } from 'react-native';

import TodoItem from './components/TodoItem';

function TodoList({ onDeleteItem, listData }) {
  renderList = item => (
    <TodoItem onDeleteItem={onDeleteItem} index={item.key} item={item} />
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
