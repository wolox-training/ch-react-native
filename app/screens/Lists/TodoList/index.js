import React, { Component } from 'react';

import { formattedData } from './constants';
import { formatNewItem } from './utils';
import TodoListScreen from './layout';

class TodoListScreenContainer extends Component {
  state = { data: formattedData };

  handleAddItem = e =>
    this.setState({
      data:
        [...this.state.data, formatNewItem(e.nativeEvent.text, this.state.data.length)]
    });

  handleDeleteItem = index => {
    const { data } = this.state;

    const newData = [...data];
    newData.splice(index, 1);

    this.setState({ data: newData })
  }

  handleRemoveAllItems = () => this.setState({ data: [] });

  render() {
    const { data } = this.state;

    return (
      <TodoListScreen
        listData={data}
        onAddItem={this.handleAddItem}
        onDeleteItem={this.handleDeleteItem}
        onRemoveAllItems={this.handleRemoveAllItems}
      />
    );
  }
}

export default TodoListScreenContainer;
