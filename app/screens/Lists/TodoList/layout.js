import React from 'react';
import { View, StyleSheet } from 'react-native';

import TodoList from './components/TodoList';
import Header from './components/Header';
import TodoInput from './components/TodoInput';
import RemoveAllItems from './components/RemoveAllItems';

function TodoListScreen({ onAddItem, listData, onDeleteItem, onRemoveAllItems }) {
  return (
    <View style={styles.container}>
      <Header />
      <TodoInput onAddItem={onAddItem} />
      <TodoList
        listData={listData}
        onDeleteItem={onDeleteItem}
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
  }
});

export default TodoListScreen;
