import React, { Component } from 'react';
import { View, FlatList } from 'react-native';
import { StackActions } from 'react-navigation';

import BookItem from './components/BookItem';
import { bookData } from './constants';

class BooksListContainer extends Component {
  handlePressBookItem = (id, title) => {
    const action = StackActions.push({
      routeName: 'BookDetail',
      params: { 
        id,
        title
      }
    });
    this.props.navigation.dispatch(action);
  }

  renderList = ({ item }) => (
    <BookItem
      image={item.image_url}
      title={item.title}
      author={item.author}
      id={item.id}
      onPressBookItem={this.handlePressBookItem}
    />
  );

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={bookData}
          renderItem={this.renderList}
        />
      </View>
    );
  }
}

export default BooksListContainer;
