import React, { PureComponent } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';

import TodoItemContainer from './components/TodoItem';
import Header from './components/Header';
import TodoInput from './components/TodoInput';
import RemoveAllItems from './components/RemoveAllItems';

import styles from './styles';

class TodoListScreen extends PureComponent {
  renderList = ({ item }) => (
    <TodoItemContainer 
      onDeleteItem={this.props.onDeleteItem} 
      item={item} 
    />
  );

  render() {
    const { onAddItem, listData, onRemoveAllItems } = this.props;
    
    return (
      <View style={styles.container}>
        <Header />
        <TodoInput onAddItem={onAddItem} />
        <FlatList
          style={styles.listContainer}
          data={listData}
          renderItem={this.renderList}
        />
        <RemoveAllItems onRemoveAllItems={onRemoveAllItems} />
      </View>
    );
  }
};

export default TodoListScreen;
