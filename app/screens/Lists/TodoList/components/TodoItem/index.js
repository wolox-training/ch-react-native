import React, { Component } from 'react';
import { View, FlatList, StyleSheet, Text, TouchableOpacity } from 'react-native';

import TodoItem from './layout';

class TodoItemContainer extends Component {
  state = { isChecked: false };

  handleCheck = () => 
    this.setState({ isChecked: !this.state.isChecked });

  handleDelete = () => this.props.onDeleteItem(this.props.index);

  render() {
    const { isChecked } = this.state;
    const { item } = this.props;
      
    return (
      <TodoItem 
        onCheck={this.handleCheck}
        onDelete={this.handleDelete}
        isChecked={isChecked}
        item={item}
      />    
    );
  }
}

export default TodoItemContainer;