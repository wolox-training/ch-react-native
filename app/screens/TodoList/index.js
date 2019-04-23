import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native'; 

import TodoList from './components/TodoList';
import Header from './components/Header';
import TodoInput from './components/TodoInput';
import RemoveAllItems from './components/RemoveAllItems';
import { formattedData } from './constants';
import { formatNewItem } from './utils';

class TodoListContainer extends Component {
  state = { data: formattedData };

  handleAddItem = e => 
    this.setState({ data: 
      [...this.state.data, formatNewItem(e.nativeEvent.text, this.state.data.length)]
    });

  handleDeleteItem = (_, index) => {
    const { data } = this.state;
    
    const newData = [...data];
    newData.splice(index, 1);

    this.setState({ data: newData })
  }

  handleRemoveAllItems = () => this.setState({ data: [] });

  render() {
    const { data } = this.state;

    return (
      <View style={styles.container}>
        <Header />
        <TodoInput onAddItem={this.handleAddItem}/>
        <TodoList 
          listData={data} 
          onDeleteItem={this.handleDeleteItem} 
        />
        <RemoveAllItems onRemoveAllItems={this.handleRemoveAllItems}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});

export default TodoListContainer;
