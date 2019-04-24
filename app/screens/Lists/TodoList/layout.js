import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';

import TodoItemContainer from './components/TodoItem';
import TodoInput from './components/TodoInput';
import RemoveAllItems from './components/RemoveAllItems';

function TodoListScreen({ onAddItem, listData, onDeleteItem, onRemoveAllItems }) {
  renderList = item => (
    <TodoItemContainer onDeleteItem={onDeleteItem} index={item.key} item={item} />
  );

  return (
    <View style={styles.container}>
      <TodoInput onAddItem={onAddItem} />
      <FlatList
        style={styles.listContainer}
        data={listData}
        renderItem={({ item }) => renderList(item)}
      />
      <RemoveAllItems onRemoveAllItems={onRemoveAllItems} />
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    flex: 1,
    justifyContent: 'center'
  },
  listContainer: {
    alignSelf: 'stretch',
    backgroundColor: 'white',
    flex: 1
  }
});

export default TodoListScreen;
