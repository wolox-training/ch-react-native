import React, { Component } from 'react';

import TodoItem from './layout';

class TodoItemContainer extends Component {
  state = { isChecked: false };

  handleCheck = () => 
    this.setState({ isChecked: !this.state.isChecked });

  handleDelete = () => this.props.onDeleteItem(this.props.item.key);

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
