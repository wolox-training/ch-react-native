import React, { Component } from 'react';
import { View, FlatList } from 'react-native';

import BookItem from './components/BookItem';
import { bookData } from './constants';

class BooksListContainer extends Component {
  renderList = ({ item }) => (
    <BookItem
      image={item.image_url}
      title={item.title}
      author={item.author}
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
